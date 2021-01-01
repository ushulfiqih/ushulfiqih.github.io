package com.ushulfiqih.app;

import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.app.ActionBar;
import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.net.http.SslError;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Message;
import android.os.Parcelable;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.CookieManager;
import android.webkit.DownloadListener;
import android.webkit.GeolocationPermissions;
import android.webkit.PermissionRequest;
import android.webkit.SslErrorHandler;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.android.billingclient.api.AcknowledgePurchaseParams;
import com.android.billingclient.api.AcknowledgePurchaseResponseListener;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingClientStateListener;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.PurchasesUpdatedListener;
import com.android.billingclient.api.SkuDetails;
import com.android.billingclient.api.SkuDetailsParams;
import com.android.billingclient.api.SkuDetailsResponseListener;
import com.ushulfiqih.app.util.NetworkHandler;
import com.ushulfiqih.app.util.PermissionUtil;
import com.ushulfiqih.app.util.Pref;
import com.ushulfiqih.app.util.ProgressDialogHelper;
import com.ushulfiqih.app.util.ShowExitDialog;
import com.ushulfiqih.app.util.UrlHandler;
import com.android.universalwebview.R;
import com.google.android.gms.ads.doubleclick.PublisherAdView;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import io.card.payment.CardIOActivity;
import io.card.payment.CreditCard;

public class MainActivity extends AppCompatActivity implements View.OnClickListener, DownloadListener, SwipeRefreshLayout.OnRefreshListener, PurchasesUpdatedListener {

    /* URL saved to be loaded after fb login */
    private static String target_url, target_url_prefix;

    private Context mContext;
    private WebView mWebview, mWebviewPop;
    private ValueCallback<Uri> mUploadMessage;
    public ValueCallback<Uri[]> uploadMessage;
    private String mCameraPhotoPath;
    private Uri mCapturedImageURI = null;
    private static final int FILE_CHOOSER_RESULT_CODE = 1;
    private static final int REQUEST_SELECT_FILE = 2;
    private static final int QRCODE_REQEST = 3;
    private static final int CARD_IO_REQUEST = 4;
    private FrameLayout mContainer;
    private ImageView mImageViewSplash;
    private ProgressBar mProgressBar;
    private TextView txtPercent;

    private ImageView mBack;
    private ImageView mForward;
    private ImageView mBilling;
    private SwipeRefreshLayout mSwipeToRefresh;
    private boolean show_content = true, showToolBar = true;

    private PublisherAdView mAdView;
    private String urlData, currentUrl, contentDisposition, mimeType;
    private AdMob admob;


    private WebAppInterface webAppInterface;
    private View rootView;

    //DATA FOR GEOLOCAION REQUEST
    String geoLocationOrigin;
    GeolocationPermissions.Callback geoLocationCallback;
    private String js = "javascript: var removeTargetBlank = (function(delay){setInterval(function(){Array.from(document.querySelectorAll('a[target=\"_blank\"]')).forEach(link => link.removeAttribute('target'));console.log('remove');}, delay);});removeTargetBlank(5000)";

    //Payment
    private BillingClient mBillingClient;
    private SkuDetails removeAdsSkuDetails;

    private String ITEM_SKU = "";
    private boolean isPurchased = false;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (TextUtils.isEmpty(getString(R.string.pullToRefresh))) {
            setContentView(R.layout.content_main);
        } else {
            setContentView(R.layout.content_main_pull_to_refresh);
        }
        checkURL(getIntent());
        initPayment();
        initComponents();
        initBrowser(savedInstanceState);

        if (savedInstanceState != null) {
            showContent();
        } else {
            new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
                    showContent();
                }
            }, 5000);
        }
    }

    private void setTargetUrl(String url) {
        target_url = url;
        target_url_prefix = Uri.parse(target_url).getHost();
        currentUrl = target_url;
    }

    private void hideProgress() {
        if (mProgressBar != null) {
            mProgressBar.setVisibility(View.GONE);
        }
        if (txtPercent != null) {
            txtPercent.setVisibility(View.GONE);
        }
    }

    private void checkURL(Intent intent) {
        if (intent != null) {
            if (!TextUtils.isEmpty(intent.getStringExtra("URL"))) {
                setTargetUrl(intent.getStringExtra("URL"));
                return;
            }

            if ("text/plain".equals(intent.getType()) && intent.hasExtra(Intent.EXTRA_TEXT)) {
                setTargetUrl(intent.getStringExtra(Intent.EXTRA_TEXT));
                return;
            }

            Uri appLinkData = intent.getData();
            if (appLinkData != null && Intent.ACTION_VIEW.equals(intent.getAction())) {
                setTargetUrl(appLinkData.toString());
                return;
            }
        }

        setTargetUrl(getString(R.string.target_url));
        if (TextUtils.isEmpty(target_url)) {
            setTargetUrl(getLocalHostWithPort());
        }

        if (mWebview != null) {
            if (mWebviewPop != null) {
                mWebviewPop.setVisibility(View.GONE);
                mContainer.removeView(mWebviewPop);
                mWebviewPop = null;
            }
            mWebview.setVisibility(View.VISIBLE);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (webAppInterface != null) {
            webAppInterface.startGoogleTracker();
        }
        SuperViewWeb.activityResumed();
        hideStatusBar();
        checkURL(getIntent());
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                setCookies(mWebview);
                setCookies(mWebviewPop);
            }
        }, 1000);
    }

    private void setCookies(WebView webVew) {
        CookieManager cookieManager = CookieManager.getInstance();
        cookieManager.setAcceptCookie(true);
        if (Build.VERSION.SDK_INT >= 21) {
            if (webVew != null) {
                cookieManager.setAcceptThirdPartyCookies(mWebview, true);
            }
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (webAppInterface != null) {
            webAppInterface.stopGoogleTracker();
        }
        if (admob != null) {
            admob.destroy();
        }
        SuperViewWeb.activityPaused();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        if (newConfig.orientation == Configuration.ORIENTATION_LANDSCAPE || newConfig.orientation == Configuration.ORIENTATION_PORTRAIT) {
            if (admob != null) {
                admob.destroy();
            }
            initAdMob();
            if (admob != null) {
                admob.requestBannerAds();
                admob.requestInterstitialAd();
            }

        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        mWebview.saveState(outState);
    }

    private void removeAds() {
        mAdView.setVisibility(View.GONE);
        mBilling.setVisibility(View.GONE);
    }

    private void initPayment() {
        mBilling = findViewById(R.id.billing);
        isPurchased = isPurchasedItem();
        ITEM_SKU = getString(R.string.item_sku);
        if (!TextUtils.isEmpty(ITEM_SKU)) {
            mBillingClient = BillingClient.newBuilder(this).setListener(this).enablePendingPurchases().build();
            mBillingClient.startConnection(new BillingClientStateListener() {
                @Override
                public void onBillingSetupFinished(BillingResult billingResult) {
                    if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK) {
                        getPurchaseItems();
                    }
                }

                @Override
                public void onBillingServiceDisconnected() {

                }
            });
        } else {
            mBilling.setVisibility(View.GONE);
        }
    }

    public void getPurchaseItems() {
        final String skuId = getString(R.string.item_sku);
        List<String> skuList = new ArrayList<>();
        skuList.add(skuId);
        SkuDetailsParams.Builder params = SkuDetailsParams.newBuilder();
        params.setSkusList(skuList).setType(BillingClient.SkuType.INAPP);
        mBillingClient.querySkuDetailsAsync(params.build(), new SkuDetailsResponseListener() {
            @Override
            public void onSkuDetailsResponse(BillingResult billingResult, List<SkuDetails> skuDetailsList) {
                if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK && skuDetailsList != null && skuDetailsList.size() > 0) {
                    removeAdsSkuDetails = skuDetailsList.get(0);
                }
            }
        });
    }

    @Override
    public void onPurchasesUpdated(BillingResult billingResult, @Nullable List<Purchase> list) {
        if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK && list != null) {
            handlePayment(list.get(0));
        }
    }

    public void handlePayment(Purchase purchase) {
        if (purchase != null && purchase.getPurchaseState() == Purchase.PurchaseState.PURCHASED) {
            isPurchased = true;
            Pref.setValue(MainActivity.this, Pref.SKU_TOKEN, purchase.getPurchaseToken());
            Pref.setValue(MainActivity.this, ITEM_SKU, true);
            if (isPurchased) {
                removeAds();
            }
            if (!purchase.isAcknowledged()) {
                getAcknowledgePurchase(purchase.getPurchaseToken());
            }
        }
    }

    private void getAcknowledgePurchase(String token) {
        if (!TextUtils.isEmpty(token)) {
            AcknowledgePurchaseParams.Builder params = AcknowledgePurchaseParams.newBuilder();
            params.setPurchaseToken(token);
            mBillingClient.acknowledgePurchase(params.build(), new AcknowledgePurchaseResponseListener() {
                @Override
                public void onAcknowledgePurchaseResponse(BillingResult billingResult) {
                }
            });
        }

    }

    private void initComponents() {

        mContext = this.getApplicationContext();
        mSwipeToRefresh = findViewById(R.id.swipeToRefresh);
        rootView = findViewById(R.id.rootView);
        if (mSwipeToRefresh != null) {
            mSwipeToRefresh.setOnRefreshListener(this);
        }
        mImageViewSplash = findViewById(R.id.image_splash);
        mProgressBar = findViewById(R.id.pbProcessing);
        txtPercent = findViewById(R.id.txtPercent);
        mAdView = findViewById(R.id.adView);
        if (isPurchased) {
            mAdView.setVisibility(View.GONE);
        }

        if (TextUtils.isEmpty(getString(R.string.toolbar))) {
            showToolBar = false;
        }

        if (showToolBar) {
            mBack = findViewById(R.id.back);
            mForward = findViewById(R.id.forward);
            ImageView mRefresh = findViewById(R.id.refresh);

            mBack.setOnClickListener(this);
            mForward.setOnClickListener(this);
            mRefresh.setOnClickListener(this);
            //if app isn't buy
            if (!isPurchased) {
                mBilling.setOnClickListener(this);
            } else {
                mBilling.setVisibility(View.GONE);
            }
        } else {
            LinearLayout llToolbarContainer = findViewById(R.id.toolbar_footer);
            if (llToolbarContainer != null) {
                llToolbarContainer.setVisibility(View.GONE);
                RelativeLayout.LayoutParams lp = (RelativeLayout.LayoutParams) mAdView.getLayoutParams();
                lp.addRule(RelativeLayout.ALIGN_PARENT_BOTTOM, RelativeLayout.TRUE);
            }
        }
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        hideStatusBar();
    }


    private void hideStatusBar() {
        if (!TextUtils.isEmpty(getString(R.string.hide_status_bar))) {
            View decorView = getWindow().getDecorView();
            int uiOptions = View.SYSTEM_UI_FLAG_FULLSCREEN;
            decorView.setSystemUiVisibility(uiOptions);
            decorView.setOnSystemUiVisibilityChangeListener(new View.OnSystemUiVisibilityChangeListener() {
                @Override
                public void onSystemUiVisibilityChange(int visibility) {
                    // Note that system bars will only be "visible" if none of the
                    // LOW_PROFILE, HIDE_NAVIGATION, or FULLSCREEN flags are set.
                    if ((visibility & View.SYSTEM_UI_FLAG_FULLSCREEN) == 0) {
                        // other navigational controls.
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                hideStatusBar();
                            }
                        });
                    }
                }
            });
            ActionBar actionBar = getActionBar();
            if (actionBar != null) {
                actionBar.hide();
            }
        }
    }

    public void showContent() {
        if (show_content) {
            if (!TextUtils.isEmpty(getString(R.string.enable_gps))) {
                PermissionUtil.checkPermissions(this, new String[]{
                        android.Manifest.permission.ACCESS_NETWORK_STATE,
                        android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
                        android.Manifest.permission.ACCESS_FINE_LOCATION,
                        android.Manifest.permission.ACCESS_COARSE_LOCATION,
                        android.Manifest.permission.INTERNET,
                });
            } else {
                PermissionUtil.checkPermissions(this, new String[]{
                        android.Manifest.permission.ACCESS_NETWORK_STATE,
                        android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
                        android.Manifest.permission.INTERNET
                });
            }

            show_content = false;

            initAdMob();
            if (admob != null) {
                admob.requestBannerAds();
                admob.requestInterstitialAd();
            }

            mImageViewSplash.setVisibility(View.GONE);
            hideProgress();
            mContainer.setVisibility(View.VISIBLE);
            ProgressDialogHelper.dismissProgress();
        }
    }

    public void initAdMob() {
        if (!isPurchasedItem()) {
            if (admob == null) {
                admob = new AdMob(this, mAdView);
            }
        }
    }

    public boolean isPurchasedItem() {
        return !TextUtils.isEmpty(Pref.getValue(this, Pref.SKU_TOKEN, ""));
    }

    @SuppressLint({"AddJavascriptInterface", "SetJavaScriptEnabled"})
    private void initBrowser(Bundle savedInstanceState) {
        initAdMob();
        mWebview = findViewById(R.id.webview);
        webAppInterface = new WebAppInterface(this, ITEM_SKU, mWebview, admob);
        mContainer = findViewById(R.id.webview_frame);
        setWebViewSettings(mWebview);

        mWebview.setWebViewClient(new UriWebViewClient());
        mWebview.setWebChromeClient(new UriChromeClient());
        if (savedInstanceState != null) {
            mWebview.restoreState(savedInstanceState);
        } else {
            mWebview.loadUrl(target_url);
            evaluateJavascript(mWebview, js);
        }
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.back:
                if (mWebview.canGoBack()) {
                    onBackPressed();
                }
                break;
            case R.id.forward:
                if (mWebview.canGoForward()) {
                    mWebview.goForward();
                }
                break;
            case R.id.refresh:
                mWebview.loadUrl(target_url);
                evaluateJavascript(mWebview, js);
                if (!show_content) {
                    ProgressDialogHelper.showProgress(MainActivity.this);
                }
                break;
            case R.id.billing:
                if (mBillingClient != null) {
                    BillingFlowParams flowParams = BillingFlowParams
                            .newBuilder()
                            .setSkuDetails(removeAdsSkuDetails)
                            .build();
                    mBillingClient.launchBillingFlow(this, flowParams);
                }

                break;
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == QRCODE_REQEST) {
            if (resultCode == RESULT_OK) {
                qrCodeResult(data);
            }
        } else if (requestCode == FILE_CHOOSER_RESULT_CODE || requestCode == REQUEST_SELECT_FILE) {
            permissionSelectFile(requestCode, resultCode, data);
        } else if (CARD_IO_REQUEST  == requestCode) {
            if (data.hasExtra(CardIOActivity.EXTRA_SCAN_RESULT)) {
                cardIOResult(data);
            }
        } else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mWebview != null) {
            mWebview.destroy();
        }
        if (mWebviewPop != null) {
            mWebviewPop.destroy();
        }
    }

    //This method will be called when the user will tap on allow or deny
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        //Checking the request code of our request
        if (requestCode == PermissionUtil.MY_PERMISSIONS_REQUEST_CALL) {
            //If permissionSelectFile is granted
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                UrlHandler.phoneLink(MainActivity.this, urlData);
            }
        } else if (requestCode == PermissionUtil.MY_PERMISSIONS_REQUEST_SMS) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                UrlHandler.smsLink(MainActivity.this, urlData);
            }
        } else if (requestCode == PermissionUtil.MY_PERMISSIONS_REQUEST_DOWNLOAD) {
            UrlHandler.download(MainActivity.this, urlData, contentDisposition, mimeType);
        } else if (requestCode == PermissionUtil.MY_PERMISSIONS_REQUEST_GEOLOCATION) {
            if (geoLocationCallback != null) {
                geoLocationCallback.invoke(geoLocationOrigin, true, false);
            }
        }
    }

    @Override
    public void onDownloadStart(String url, String userAgent, String contentDisposition, String mimeType, long l) {
        this.contentDisposition = contentDisposition;
        this.mimeType = mimeType;
        UrlHandler.downloadLink(this, url, contentDisposition, mimeType);
    }

    private void setToolbarButtonColor() {
        if (showToolBar) {
            if (mWebview.canGoBack()) {
                mBack.setColorFilter(ContextCompat.getColor(this, R.color.colorPrimary));
            } else {
                mBack.setColorFilter(ContextCompat.getColor(this, R.color.gray));
            }
            if (mWebview.canGoForward()) {
                mForward.setColorFilter(ContextCompat.getColor(this, R.color.colorPrimary));
            } else {
                mForward.setColorFilter(ContextCompat.getColor(this, R.color.gray));
            }
        }
    }

    @Override
    public void onRefresh() {
        mWebview.reload();
        mSwipeToRefresh.setRefreshing(false);
    }

    private class UriWebViewClient extends WebViewClient {
        @Deprecated
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            ProgressDialogHelper.showProgress(MainActivity.this);
            String host = Uri.parse(url).getHost();
            urlData = url;
            if (target_url_prefix.equals(host)) {
                if (mWebviewPop != null) {
                    mWebviewPop.setVisibility(View.GONE);
                    mContainer.removeView(mWebviewPop);
                    mWebviewPop = null;
                }
                evaluateJavascript(view, js);

                return false;
            }


            boolean result = UrlHandler.checkUrl(MainActivity.this, url);
            if (result) {
                ProgressDialogHelper.dismissProgress();
            } else {
                currentUrl = url;
                if (!show_content) {
                    ProgressDialogHelper.showProgress(MainActivity.this);
                }
            }
            evaluateJavascript(view, js);
            return result;
        }

        @TargetApi(Build.VERSION_CODES.N)
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            ProgressDialogHelper.showProgress(MainActivity.this);   //REMOVE THIS LINE
            String host = Uri.parse(request.getUrl().toString()).getHost();
            urlData = request.getUrl().toString();

            if (target_url_prefix.equals(host)) {
                if (mWebviewPop != null) {
                    mWebviewPop.setVisibility(View.GONE);
                    mContainer.removeView(mWebviewPop);
                    mWebviewPop = null;
                }
                evaluateJavascript(view, js);

                return false;
            }

            boolean result = UrlHandler.checkUrl(MainActivity.this, request.getUrl().toString());
            if (result) {
                ProgressDialogHelper.dismissProgress();

            } else {
                currentUrl = request.getUrl().toString();
                if (!show_content) {
                    ProgressDialogHelper.showProgress(MainActivity.this);
                }
            }
            evaluateJavascript(view, js);
            return result;
        }

        private void loadError(WebView view) {
            if (!NetworkHandler.isNetworkAvailable(view.getContext())) {
                if (!target_url.equals(getLocalHostWithPort())) {
                    view.loadUrl(getLocalHostError());
                }
            }
        }

        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {
            super.onPageStarted(view, url, favicon);
            if (url.endsWith(".pdf")) {
                UrlHandler.downloadLink(MainActivity.this, url, "", ".pdf");
            }
        }

        @Override
        public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
            super.onReceivedSslError(view, handler, error);
            handler.proceed();
            loadError(view);
            hideStatusBar();
            ProgressDialogHelper.dismissProgress();
            evaluateJavascript(view, js);
        }


        @Override
        public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
            super.onReceivedError(view, errorCode, description, failingUrl);
            loadError(view);
            hideStatusBar();
            ProgressDialogHelper.dismissProgress();
            evaluateJavascript(view, js);
        }

        @Override
        public void onReceivedHttpError(WebView view, WebResourceRequest request, WebResourceResponse errorResponse) {
            super.onReceivedHttpError(view, request, errorResponse);
            loadError(view);
            hideStatusBar();
            ProgressDialogHelper.dismissProgress();
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);
            showContent();
            setToolbarButtonColor();
            hideStatusBar();
            ProgressDialogHelper.dismissProgress();
            evaluateJavascript(view, js);
        }

        @Override
        public void onPageCommitVisible(WebView view, String url) {
            super.onPageCommitVisible(view, url);
            setToolbarButtonColor();
            hideStatusBar();
            ProgressDialogHelper.dismissProgress();
            evaluateJavascript(view, js);
        }
    }

    @SuppressLint({"SetJavaScriptEnabled", "AddJavascriptInterface"})
    public void setWebViewSettings(WebView webView) {

        webView.getSettings().setAllowFileAccessFromFileURLs(true);
        webView.getSettings().setAllowUniversalAccessFromFileURLs(true);

        setCookies(webView);
        webView.setVerticalScrollBarEnabled(false);
        webView.setHorizontalScrollBarEnabled(false);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setSavePassword(false);
        webView.setWebViewClient(new UriWebViewClient());
        webView.setWebChromeClient(new UriChromeClient());
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            webView.getSettings().setSafeBrowsingEnabled(true);
        }
        webView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        webView.getSettings().setSupportMultipleWindows(true);
        webView.getSettings().setGeolocationEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.getSettings().setDatabaseEnabled(true);
        webView.getSettings().setGeolocationEnabled(true);
        webView.getSettings().setGeolocationDatabasePath(getFilesDir().getPath());
        if (webAppInterface == null) {
            webAppInterface = new WebAppInterface(this, ITEM_SKU, webView, admob);
        }
        webView.addJavascriptInterface(webAppInterface, "android");
        webView.getSettings().setLoadWithOverviewMode(true);
        webView.getSettings().setAllowFileAccess(true);
//        webView.getSettings().setUserAgentString("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0");
        //webView.getSettings().setUserAgentString("Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36");
//        webView.getSettings().setUserAgentString("Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>");

        if (!TextUtils.isEmpty(getString(R.string.cache))) {
            webView.getSettings().setAppCacheEnabled(true);
            webView.getSettings().setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NORMAL);
            webView.getSettings().setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);

        } else {
            webView.getSettings().setAppCacheEnabled(false);
            webView.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
            webView.clearCache(true);
        }

        if (!TextUtils.isEmpty(getString(R.string.zoom))) {
            webView.getSettings().setSupportZoom(true);
            webView.getSettings().setBuiltInZoomControls(true);
            webView.getSettings().setDisplayZoomControls(false);
        }

        webView.setDownloadListener(MainActivity.this);

        evaluateJavascript(webView, js);
    }

    class UriChromeClient extends WebChromeClient {
        private View mCustomView;
        private WebChromeClient.CustomViewCallback mCustomViewCallback;
        protected FrameLayout mFullScreenContainer;
        private int mOriginalOrientation;
        private int mOriginalSystemUiVisibility;

        @Override
        public void onPermissionRequest(PermissionRequest request) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                request.grant(request.getResources());
            }
        }

        @Nullable
        @Override
        public Bitmap getDefaultVideoPoster() {
            if (mCustomView == null) {
                return null;
            }
            return BitmapFactory.decodeResource(getApplicationContext().getResources(), 213083767);
        }

        public void onHideCustomView() {
            ((FrameLayout) getWindow().getDecorView()).removeView(this.mCustomView);
            this.mCustomView = null;
            getWindow().getDecorView().setSystemUiVisibility(this.mOriginalSystemUiVisibility);
            this.mCustomViewCallback.onCustomViewHidden();
            this.mCustomViewCallback = null;
        }

        public void onShowCustomView(View paramView, WebChromeClient.CustomViewCallback paramCustomViewCallback) {
            if (this.mCustomView != null) {
                onHideCustomView();
                return;
            }
            this.mCustomView = paramView;
            this.mOriginalSystemUiVisibility = getWindow().getDecorView().getSystemUiVisibility();
            this.mOriginalOrientation = getRequestedOrientation();
            this.mCustomViewCallback = paramCustomViewCallback;
            ((FrameLayout) getWindow().getDecorView()).addView(this.mCustomView, new FrameLayout.LayoutParams(-1, -1));
            getWindow().getDecorView().setSystemUiVisibility(3846);
        }

        @SuppressLint({"AddJavascriptInterface", "SetJavaScriptEnabled"})
        @Override
        public boolean onCreateWindow(WebView view, boolean isDialog,
                                      boolean isUserGesture, Message resultMsg) {

            Log.e("TEST", "onCreateWindow");
            mWebviewPop = new WebView(mContext);
            setWebViewSettings(mWebviewPop);
            mWebviewPop.setLayoutParams(new FrameLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT));
            mContainer.addView(mWebviewPop);
            WebView.WebViewTransport transport = (WebView.WebViewTransport) resultMsg.obj;
            transport.setWebView(mWebviewPop);
            resultMsg.sendToTarget();
            return true;
        }

        @Override
        public void onProgressChanged(WebView view, int newProgress) {
            super.onProgressChanged(view, newProgress);
            mProgressBar.setProgress(newProgress);
            if (txtPercent != null) {
                txtPercent.setText(String.format("%s", newProgress) + "%");
            }
        }

        @Override
        public void onCloseWindow(WebView window) {
            Log.v("TEST", "onCloseWindow");
            if (mWebviewPop != null) {
                mWebviewPop.setVisibility(View.GONE);
                mContainer.removeView(mWebviewPop);
                mWebviewPop = null;
                mWebview.setVisibility(View.VISIBLE);
                return;
            }
        }


        @Override
        public void onRequestFocus(WebView view) {
            Log.v("TEST", "onRequestFocus");
            super.onRequestFocus(view);
        }

        @Override
        public void onGeolocationPermissionsShowPrompt(final String origin,
                                                       final GeolocationPermissions.Callback callback) {
            // Always grant permissionSelectFile since the app itself requires location
            // permissionSelectFile and the user has therefore already granted it
            MainActivity.this.geoLocationOrigin = origin;
            MainActivity.this.geoLocationCallback = callback;
            PermissionUtil.geoLocationPermission(MainActivity.this, origin, callback);
        }

        // openFileChooser for Android 3.0+
        protected void openFileChooser(ValueCallback uploadMsg, String acceptType) {
            mUploadMessage = uploadMsg;
            File imageStorageDir = new File(
                    Environment.getExternalStoragePublicDirectory(
                            Environment.DIRECTORY_PICTURES)
                    , "AndroidExampleFolder");

            if (!imageStorageDir.exists()) {
                // Create AndroidExampleFolder at sdcard
                imageStorageDir.mkdirs();
            }

            // Create camera captured image file path and name
//            File file = new File(
//                    imageStorageDir + File.separator + "IMG_"
//                            + String.valueOf(System.currentTimeMillis())
//                            + ".jpg");
//            mCapturedImageURI = FileProvider.getUriForFile(MainActivity.this, BuildConfig.APPLICATION_ID + ".fileprovider", file);

            // Camera capture image intent
            final Intent captureIntent = new Intent(
                    android.provider.MediaStore.ACTION_IMAGE_CAPTURE);

            captureIntent.putExtra(MediaStore.EXTRA_OUTPUT, mCapturedImageURI);

            Intent i = new Intent(Intent.ACTION_GET_CONTENT);
            i.addCategory(Intent.CATEGORY_OPENABLE);
            i.setType("*/*");

            // Create file chooser intent
            Intent chooserIntent = Intent.createChooser(i, "Image Chooser");

            // Set camera intent to file chooser
            chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Parcelable[]{captureIntent});

            // On select image call onActivityResult method of activity
            startActivityForResult(chooserIntent, FILE_CHOOSER_RESULT_CODE);
        }

        // For Lollipop 5.0+ Devices
        @TargetApi(Build.VERSION_CODES.LOLLIPOP)
        public boolean onShowFileChooser(WebView mWebView, ValueCallback<Uri[]> filePathCallback,
                                         WebChromeClient.FileChooserParams fileChooserParams) {
            if (uploadMessage != null) {
                uploadMessage.onReceiveValue(null);
                uploadMessage = null;
            }

            uploadMessage = filePathCallback;

            Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
            if (takePictureIntent.resolveActivity(getPackageManager()) != null) {
                // Create the File where the photo should go
                File photoFile = null;
                try {
                    photoFile = createImageFile();
                    takePictureIntent.putExtra("PhotoPath", mCameraPhotoPath);
                } catch (IOException ex) {
                    // Error occurred while creating the File
                    Log.e("TEST", "Unable to create Image File", ex);
                }

                // Continue only if the File was successfully created
                if (photoFile != null) {
                    mCameraPhotoPath = "file:" + photoFile.getAbsolutePath();
//                    takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT,
//                            FileProvider.getUriForFile(MainActivity.this, BuildConfig.APPLICATION_ID + ".fileprovider", photoFile));
                } else {
                    takePictureIntent = null;
                }
            }

            Intent contentSelectionIntent = new Intent(Intent.ACTION_GET_CONTENT);
            contentSelectionIntent.addCategory(Intent.CATEGORY_OPENABLE);
            contentSelectionIntent.setType("*/*");

            Intent[] intentArray;
            if (takePictureIntent != null) {
                intentArray = new Intent[]{takePictureIntent};
            } else {
                intentArray = new Intent[0];
            }

            Intent chooserIntent = new Intent(Intent.ACTION_CHOOSER);
            chooserIntent.putExtra(Intent.EXTRA_INTENT, contentSelectionIntent);
            chooserIntent.putExtra(Intent.EXTRA_TITLE, "Image Chooser");
            chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, intentArray);

            startActivityForResult(chooserIntent, FILE_CHOOSER_RESULT_CODE);

            return true;
        }

        private File createImageFile() throws IOException {
            // Create an image file name
            String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
            String imageFileName = "JPEG_" + timeStamp + "_";
            File storageDir = Environment.getExternalStoragePublicDirectory(
                    Environment.DIRECTORY_PICTURES);
            File imageFile = File.createTempFile(
                    imageFileName,  /* prefix */
                    ".jpg",         /* suffix */
                    storageDir      /* directory */
            );
            return imageFile;
        }

        // openFileChooser for Android < 3.0
        public void openFileChooser(ValueCallback<Uri> uploadMsg) {
            openFileChooser(uploadMsg, "");
        }

        //For Android 4.1 only
        protected void openFileChooser(ValueCallback<Uri> uploadMsg, String acceptType, String capture) {
            openFileChooser(uploadMsg, acceptType);
        }
    }


    public void permissionSelectFile(int requestCode, int resultCode, Intent data) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {

            if (requestCode != FILE_CHOOSER_RESULT_CODE || uploadMessage == null) {
                super.onActivityResult(requestCode, resultCode, data);
                return;
            }

            Uri[] results = null;

            // Check that the response is a good one
            if (resultCode == Activity.RESULT_OK) {
                if (data == null) {
                    // If there is not data, then we may have taken a photo
                    if (mCameraPhotoPath != null) {
                        results = new Uri[]{Uri.parse(mCameraPhotoPath)};
                    }
                } else {
                    String dataString = data.getDataString();
                    if (dataString != null) {
                        results = new Uri[]{Uri.parse(dataString)};
                    }
                }
            }

            uploadMessage.onReceiveValue(results);
            uploadMessage = null;

        } else if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.KITKAT) {
            if (requestCode != FILE_CHOOSER_RESULT_CODE || mUploadMessage == null) {
                super.onActivityResult(requestCode, resultCode, data);
                return;
            }

            if (requestCode == FILE_CHOOSER_RESULT_CODE) {

                if (null == this.mUploadMessage) {
                    return;

                }

                Uri result = null;

                try {
                    if (resultCode != RESULT_OK) {

                        result = null;

                    } else {

                        // retrieve from the private variable if the intent is null
                        result = data == null ? mCapturedImageURI : data.getData();
                    }
                } catch (Exception e) {
                    Toast.makeText(getApplicationContext(), "activity :" + e,
                            Toast.LENGTH_LONG).show();
                }

                mUploadMessage.onReceiveValue(result);
                mUploadMessage = null;

            }
        }
    }

    public void evaluateJavascript(WebView webView, String js) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            webView.evaluateJavascript(js, null);
        } else {
            webView.loadUrl("javascript:" + js);
        }
    }

    public void showCardIO() {
        if (PermissionUtil.isPermissionAllowed(this, android.Manifest.permission.CAMERA)) {
            Intent scanIntent = new Intent(this, CardIOActivity.class);
            // customize these values to suit your needs.
            scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_EXPIRY, true); // default: false
            scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_CVV, false); // default: false
            scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_POSTAL_CODE, false); // default: false
            // MY_SCAN_REQUEST_CODE is arbitrary and is only used within this activity.
            startActivityForResult(scanIntent, CARD_IO_REQUEST);
        } else {
            PermissionUtil.checkPermissions(this, new String[]{
                    android.Manifest.permission.CAMERA
            });
        }
    }

    public void cardIOResult(Intent data) {
        CreditCard scanResult = data.getParcelableExtra(CardIOActivity.EXTRA_SCAN_RESULT);
        if (mWebview != null) {
            mWebview.loadUrl("javascript:CardIOResult('" + scanResult.toString() + "');");
        }
        if (mWebviewPop != null) {
            mWebviewPop.loadUrl("javascript:CardIOResult(" + scanResult.toString() + ");");
        }
    }

    public void showQRCode() {
        if (PermissionUtil.isPermissionAllowed(this, android.Manifest.permission.CAMERA)) {
            startActivityForResult(new Intent(this, QRScanner.class), QRCODE_REQEST);
        } else {
            PermissionUtil.checkPermissions(this, new String[]{
                    android.Manifest.permission.CAMERA
            });
        }
    }

    public void qrCodeResult(Intent data) {
        String result = data.getStringExtra(QRScanner.RESULT_QRCODE);
        if (mWebview != null) {
            mWebview.loadUrl("javascript:QRCodeResult('" + result + "');");
        }
        if (mWebviewPop != null) {
            mWebviewPop.loadUrl("javascript:QRCodeResult(" + result + ");");
        }
    }

    private String getLocalHostWithPort() {
        return "file:///android_asset/web/index.html";
    }

    private String getLocalHostError() {
        return "file:///android_asset/web/NoInternet.html";
    }

    @Override
    public void onBackPressed() {
        if (mWebviewPop != null) {
            mWebviewPop.setVisibility(View.GONE);
            mContainer.removeView(mWebviewPop);
            mWebviewPop = null;
            mWebview.setVisibility(View.VISIBLE);
            return;
        }
        if (mWebview.canGoBack()) {
            mWebview.goBack();
        } else {
            ShowExitDialog.showDialog(this, new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    if (which == -1) {
                        finish();
                    }
                }
            });
        }
    }
}
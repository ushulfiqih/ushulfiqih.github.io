package com.ushulfiqih.app.util;

import android.content.Context;
import android.net.ConnectivityManager;

/**
 * Created by dragank on 2/28/2017.
 */

public class NetworkHandler {
    public static boolean isNetworkAvailable(Context mContext) {
        ConnectivityManager cm = (ConnectivityManager) mContext.getSystemService(Context.CONNECTIVITY_SERVICE);
        return cm.getActiveNetworkInfo() != null && cm.getActiveNetworkInfo().isConnected();
    }
}

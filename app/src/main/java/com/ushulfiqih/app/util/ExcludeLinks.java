package com.ushulfiqih.app.util;
//
// Created by  on 2020-02-19.
//

import android.text.TextUtils;

import java.util.ArrayList;

public class ExcludeLinks {

    private ArrayList<String> pathList = new ArrayList<>();

    public ExcludeLinks() {
        pathList.add("page1?lang=ar");
        pathList.add("page1?lang=en");

        pathList.add("page2?lang=ar");
        pathList.add("page2?lang=en");

        pathList.add("page3?lang=ar");
        pathList.add("page3?lang=en");

        pathList.add("page4?lang=ar");
        pathList.add("page4?lang=en");

        pathList.add("page5?lang=ar");
        pathList.add("page5?lang=en");
    }


    public boolean isLinkExcludedFromWebView(String link) {
        boolean result = false;
        if (!TextUtils.isEmpty(link)){
            for (String  path: pathList) {
                if (link.contains(path)){
                    result = true;
                    break;
                }
            }
        }
        return result;
    }
}

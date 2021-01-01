package com.ushulfiqih.app.util;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface.OnClickListener;

import com.android.universalwebview.R;

public class ShowExitDialog {
    public static Dialog showDialog(Context context,OnClickListener listener) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setMessage(context.getString(R.string.exit_dialog_button_message))
                .setTitle(context.getString(R.string.exit_dialog_button_message))
                .setIcon(android.R.drawable.ic_dialog_info)
                .setPositiveButton(context.getString(R.string.exit_dialog_button_yes), listener)
                .setNegativeButton(context.getString(R.string.exit_dialog_button_no), listener)
                .setCancelable(false);

        return builder.show();
    }
}

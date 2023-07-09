plugin.tx_felogin_login.email_from = no-reply@gesbit.de
plugin.tx_felogin_login.email_fromName = Gesbit

plugin.tx_felogin_login {
  view {
    templateRootPaths.10 = {$plugin.tx_felogin_login.view.templateRootPath}
    templateRootPaths.20 = EXT:rh_theme/Resources/Private/Extensions/felogin/Templates
    partialRootPaths.10 = {$plugin.tx_felogin_login.view.partialRootPath}
    layoutRootPaths.10 = {$plugin.tx_felogin_login.view.layoutRootPath}
  }
}

plugin.tx_felogin_login._LOCAL_LANG.default {
   login = Login
}

plugin.tx_felogin_login._LOCAL_LANG.de {
   login = Anmelden
}
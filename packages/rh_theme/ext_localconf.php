<?php
defined('TYPO3_MODE') || die();

call_user_func(function () {

    /***************
     * Add default RTE configuration
     */
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:rh_theme/Configuration/Yaml/Rte/Default.yaml';

    /***************
     * Adding PageTS config
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rh_theme/Configuration/TsConfig/Page.tsconfig">'
    );

    /***************
     * Adding UserTS config
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rh_theme/Configuration/TsConfig/User.tsconfig">'
    );

});

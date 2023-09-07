<?php

defined('TYPO3_MODE') || die();

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use GridDesign\RhTheme\Hooks\PageLayoutView\AkkordeonPreviewRenderer;

// Allow Custom Records on Standard Pages
ExtensionManagementUtility::allowTableOnStandardPages('tx_rhtheme_akkordeon');

call_user_func(
    function () {
        // Register own preview renderer for content elements
        $layout = 'cms/layout/class.tx_cms_layout.php';
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS'][$layout]['tt_content_drawItem']['akkordeon'] = AkkordeonPreviewRenderer::class;
    }
);
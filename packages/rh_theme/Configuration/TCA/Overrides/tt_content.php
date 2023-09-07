<?php

defined('TYPO3_MODE') or die();

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

ExtensionManagementUtility::addPlugin(
    array(
       'Akkordeon',
       'akkordeon',
       'svg-icon-content-element'
    ),
    'CType',
    'rh_theme'
);
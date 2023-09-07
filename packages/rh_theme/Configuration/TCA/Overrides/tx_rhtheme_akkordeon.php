<?php

defined('TYPO3_MODE') or die();

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

$GLOBALS['TCA']['tt_content']['types']['akkordeon'] = array(
    'showitem' => '
    --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.headers;headers,
    tx_rhtheme_akkordeon,
    --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.appearance,
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.frames;frames,
    --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
    --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended',
);

$fields = [
    'tx_rhtheme_akkordeon' => [
        'exclude' => 1,
        'label' => 'Akkordeon',
        'description' => '',
        'config' => [
            'type' => 'inline',
            'maxitems' => 25,
            'foreign_table' => 'tx_rhtheme_akkordeon',
            'foreign_field' => 'parentuid',
            'foreign_table_field' => 'parenttable',
            'foreign_label' => 'title',
            'foreign_sortby' => 'sorting',
            'appearance' => [
                'useSortable' => 1,
                'showSynchronizationLink' => 1,
                'showAllLocalizationLink' => 1,
                'showPossibleLocalizationRecords' => 1,
                'collapseAll' => 1,
                'expandSingle' => 1,
                'levelLinksPosition' => 'bottom',
                'enabledControls' => [
                    'info' => 0,
                    'new' => 0,
                    'dragdrop' => 1,
                    'sort' => 0,
                    'hide' => 1,
                    'delete' => 1,
                    'localize' => 1,
                ],
            ],
        ],
    ],
];
ExtensionManagementUtility::addTCAcolumns('tt_content', $fields);
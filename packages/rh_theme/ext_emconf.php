<?php

/**
 * Extension Manager/Repository config file for ext "rh_theme".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'RH Theme',
    'description' => 'Basic page config',
    'category' => 'fe',
    'author' => 'Robert Heyduck',
    'author_email' => 'dev@typo-script.de',
    'author_company' => 'Grid Design',
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '11.5.0-11.5.99',
            'fluid_styled_content' => '11.5.0-11.5.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'GridDesign\\RhTheme\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1
];

<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "fe_users_erw".
 *
 * Auto generated 22-09-2015 11:07
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
	'title' => 'RH FE User',
	'description' => 'Erweitert Tabelle fe_users um zusaetzliche Felder fuer onetimeaccount',
	'category' => 'misc',
	'author' => 'Robert Heyduck',
	'author_email' => 'dev@typo-script.de',
	'state' => 'stable',
	'uploadfolder' => 0,
	'createDirs' => '',
	'clearCacheOnLoad' => 0,
	'author_company' => '',
	'version' => '2.0.0',
	'autoload' => [
        'psr-4' => [
            'GridDesign\\RhFeuser\\' => 'Classes',
        ],
    ],
);
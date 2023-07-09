<?php

defined('TYPO3_MODE') or die();

$tempColumns = array(
	'tx_feuserserw_gender' => array(
		'exclude' => 0,
		'label' => 'LLL:EXT:rh_feuser/Resources/Private/Language/locallang.xlf:fe_users.tx_feuserserw_gender',
		'config' => array(
			'type' => 'radio',
			'items' => array(
				array('LLL:EXT:rh_feuser/Resources/Private/Language/locallang.xlf:fe_users.tx_feuserserw_gender.I.0', 'Herr'),
				array('LLL:EXT:rh_feuser/Resources/Private/Language/locallang.xlf:fe_users.tx_feuserserw_gender.I.1', 'Frau'),
			),
		)
	),
	'tx_feuserserw_projekt' => array(
		'exclude' => 0,
		'label' => 'LLL:EXT:rh_feuser/Resources/Private/Language/locallang.xlf:fe_users.tx_feuserserw_projekt',
		'config' => array(
			'type' => 'input',
			'size' => '30',
			'eval' => 'trim',
		)
	),
	'tx_feuserserw_traeger' => array(
		'exclude' => 0,
		'label' => 'LLL:EXT:rh_feuser/Resources/Private/Language/locallang.xlf:fe_users.tx_feuserserw_traeger',
		'config' => array(
			'type' => 'input',
			'size' => '30',
			'eval' => 'trim',
		)
	),
	'datenschutz' => array(
		'exclude' => 0,
		'label' => 'Datenschutz',
		'config' => array(
			'type' => 'check',
			'default' => 0,
		)
	),
);


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('fe_users',$tempColumns);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('fe_users','tx_feuserserw_gender;;;;1-1-1','','before:title');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('fe_users','tx_feuserserw_projekt, tx_feuserserw_traeger','','after:www');
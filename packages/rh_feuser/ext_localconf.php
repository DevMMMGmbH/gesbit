<?php

defined('TYPO3_MODE') or die();

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Object\Container\Container;

/************************************************************************
 * XCLASS
 ************************************************************************/
$GLOBALS['TYPO3_CONF_VARS']['SYS']['Objects'][TYPO3\CMS\Extbase\Domain\Model\FrontendUser::class] = [
    'className' => \GridDesign\RhFeuser\Domain\Model\FrontendUser::class,
];


// Register extended registration class (TYPO3 9.5 - 11.5 only)
GeneralUtility::makeInstance(Container::class)
    ->registerImplementation(
        \TYPO3\CMS\Extbase\Domain\Model\FrontendUser::class, 
        \GridDesign\RhFeuser\Domain\Model\FrontendUser::class
    );
<?php

namespace GridDesign\RhTheme\Hooks\PageLayoutView;

use TYPO3\CMS\Backend\View\PageLayoutViewDrawItemHookInterface;
use TYPO3\CMS\Backend\View\PageLayoutView;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Extbase\Object\ObjectManager;
use TYPO3\CMS\Fluid\View\StandaloneView;

class AkkordeonPreviewRenderer implements PageLayoutViewDrawItemHookInterface
{
	/**
	 * Preprocesses the preview rendering of a content element of type "akkordeon"
	 *
	 * @param \TYPO3\CMS\Backend\View\PageLayoutView $parentObject Calling parent object
	 * @param bool $drawItem Whether to draw the item using the default functionality
	 * @param string $headerContent Header content
	 * @param string $itemContent Item content
	 * @param array $row Record row of tt_content
	 *
	 * @return void
	 */
	public function preProcess( PageLayoutView &$parentObject, &$drawItem, &$headerContent, &$itemContent, array &$row )
	{
		// if ($row['CType'] === 'akkordeon') {
        //     $itemContent .= '<p>We can change our preview here!</p>';
        //     $drawItem = false;
        // }
		if ($row['CType'] === 'akkordeon')
		{
			$drawItem = false;
			
			$objectManager = GeneralUtility::makeInstance(ObjectManager::class);
			$standaloneView = $objectManager->get(StandaloneView::class);
			$standaloneView->setTemplateRootPaths([10, 'EXT:rh_theme/Resources/Private/Backend/Templates/']);
			$standaloneView->setLayoutRootPaths([10,'EXT:rh_theme/Resources/Private/Backend/Layouts/']);
			$standaloneView->setPartialRootPaths([10,'EXT:rh_theme/Resources/Private/Backend/Partials/']);
			$standaloneView->setFormat('html');
			$standaloneView->setTemplate('PageLayoutView.html');

			$queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('tx_rhtheme_akkordeon');
			$content = $queryBuilder
				->select('title')
				->from('tx_rhtheme_akkordeon')
				->where(
					$queryBuilder->expr()->eq('parentuid', $queryBuilder->createNamedParameter($row['uid'],\PDO::PARAM_INT)),
					$queryBuilder->expr()->eq('hidden', $queryBuilder->createNamedParameter(0, \PDO::PARAM_INT)),
					$queryBuilder->expr()->eq('deleted', $queryBuilder->createNamedParameter(0, \PDO::PARAM_INT))
				)
				->orderBy('sorting')
				->execute()
				->fetchAllAssociative();

			$countItems = count($content);

			$standaloneView->assignMultiple([
				'items' => $countItems,
				'title' => $parentObject->CType_labels[$row['CType']],
				'type' => $row['CType'],
				'akkordeon' => $content,
			]);

			$itemContent .= $standaloneView->render();

		}
	}
}
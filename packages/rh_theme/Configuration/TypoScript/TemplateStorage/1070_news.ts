
plugin.tx_news{
  _LOCAL_LANG.de.related-files =
  _LOCAL_LANG.de.more-link = mehr
  _LOCAL_LANG.de.author = %s
  _LOCAL_LANG.de.author_simple = &nbsp;&#124;&nbsp;
  _LOCAL_LANG.de.paginate_overall = Seite %s von %s
  
  settings{
    list.media.image.maxWidth = 979
    list.media.image.maxHeight >
    
    orderBy = datetime
    orderDirection = desc
    #    detailPid = 23
    #    defaultDetailPid = 23
    cropMaxCharacters = 250

    detail.media.image.lightbox.enabled = 1
    #    detail.media.image.lightbox.class = magnificpopup
    displayDummyIfNoMedia = 0
    detail.showSocialShareButtons = 0
    detail.media.image.maxWidth = 304
    detail.media.image.maxHeight >
    
    list.paginate {
      insertAbove = 0
#      itemsPerPage = 7
      insertBelow = 1
      templatePath =
      prevNextHeaderTags = 1
      maximumNumberOfLinks = 33
    }
  }
}

[getTSFE().id == 1]
plugin.tx_news{
  settings{
    list.media.image.maxWidth = 979
    list.media.image.maxHeight >
  }
}
[global]

# RSS

# Blog
// [globalVar = TSFE:type = 9818]&&[globalVar = TSFE:id=6]
[getTSFE().type == 9818 && getTSFE().id == 6]
pageNewsRSS = PAGE
pageNewsRSS {
    typeNum = 9818
    config {
      disableAllHeaderCode = 1
      xhtml_cleaning = none
      admPanel = 0
      debug = 0
      disablePrefixComment = 1
      metaCharset = utf-8
      additionalHeaders.10.header = Content-Type:application/rss+xml;charset=utf-8
      absRefPrefix = {$gesbitURL}
      linkVars >
   }
   10 < tt_content.news_pi1.20
   10 {

      settings < plugin.tx_news.settings
      settings {
         limit = 300
         detailPid = 43
         startingpoint = 41
         format = xml
      }
   }
}
[global]


# News
[getTSFE().type == 9818 && getTSFE().id == 5]
pageNewsRSS = PAGE
pageNewsRSS {
    typeNum = 9818
    config {
      disableAllHeaderCode = 1
      xhtml_cleaning = none
      admPanel = 0
      debug = 0
      disablePrefixComment = 1
      metaCharset = utf-8
      additionalHeaders.10.header = Content-Type:application/rss+xml;charset=utf-8
      absRefPrefix = {$gesbitURL}
      linkVars >
   }
   10 < tt_content.news_pi1.20
   10 {

      settings < plugin.tx_news.settings
      settings {
         limit = 300
         detailPid = 42
         startingpoint = 39
         format = xml
      }
   }
}
[global]


// [PIDinRootline = 123]
[123 in tree.rootLineIds]
page.cssInline {
	133 = TEXT
	133.value (
#main #content #right .news {
    background: none;
    margin-bottom: 24px;
    padding: 0;
}

	)
}
plugin.tx_news {
  view {
        templateRootPaths {
                0 = {$plugin.tx_news.view.templateRootPath}
                1 = EXT:rh_theme/Resources/Private/Extensions/Eventnews/Templates/
        }
  }
}
plugin.tx_news {
        view {
                templateRootPaths.99 = EXT:cb_newscal/Resources/Private/Templates/
                partialRootPaths.99 = EXT:rh_theme/Resources/Private/Extensions/cb_newscal/Partials/
                layoutRootPaths.99 = EXT:cb_newscal/Resources/Private/Layouts/
        }
        settings {
        firstDayOfWeek = {$plugin.tx_cbnewscal.settings.firstDayOfWeek}
        scrollMode = {$plugin.tx_cbnewscal.settings.scrollMode}
    }
}


[global]

plugin.tx_news {
	mvc.callDefaultActionIfActionCantBeResolved = 1

	view {
		templateRootPaths {
			0 = EXT:news/Resources/Private/Templates/
			1 = {$plugin.tx_news.view.templateRootPath}
                        2 = EXT:rh_theme/Resources/Private/Extensions/News/Templates/
		}

		partialRootPaths {
			0 = EXT:news/Resources/Private/Partials/
			1 = {$plugin.tx_news.view.partialRootPath}
                        2 = EXT:rh_theme/Resources/Private/Extensions/News/Partials/
		}

		layoutRootPaths {
			0 = EXT:news/Resources/Private/Layouts/
			1 = {$plugin.tx_news.view.layoutRootPath}
                        2 = EXT:rh_theme/Resources/Private/Extensions/News/Layouts/
		}

		widget.GeorgRinger\News\ViewHelpers\Widget\PaginateViewHelper.templateRootPath = EXT:news/Resources/Private/Templates/
	}

}

plugin.tx_news._LOCAL_LANG {
    # Standardsprache
    default {
        dateFormat = %m/%d/%Y
    }
    # Deutsche Spracje
    de {
        dateFormat = %d.%m.%Y
    }
    # [...]
}
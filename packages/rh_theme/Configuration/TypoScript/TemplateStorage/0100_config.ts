// config{
//   no_cache = 0
//   doctype = html5
//   contentObjectExceptionHandler = 0
//   absRefPrefix = 
	
// baseURL = {$gesbitURL}

//   simulateStaticDocuments = 0
//   tx_realurl_enable = 1
//   prefixLocalAnchors = all
  
//   disablePrefixComment = 1
  
// compressCss = 0
// concatenateCss = 0
  
//   ###EMAIL MASKIEREN
//   spamProtectEmailAddresses = 2
//   spamProtectEmailAddresses_atSubst = (at)
  
//   ###ADMIN PANEL
//   admPanel = 0
  
//   #sprache
//   linkVars = L(0-2)
//   sys_language_uid = 0
//   language = de
//   locale_all = de_DE.utf8
//   htmlTag_langKey = de
//   sys_language_overlay = hideNonTranslated

  
// }
#indexed_search
config.index_enable = 1
config.index_externals = 1
page.config.index_enable = 1
page.config.index_externals = 1

# Seitentitel
#config.noPageTitle = 2
#page.headerData.5 = TEXT
#page.headerData.5.field = title // subtitle
#page.headerData.5.noTrimWrap = |<title>| : GesBiT</title>|

# Newstitel als Seitentitel
[traverse(request.getQueryParams(), 'tx_news_pi1/news') > 0]
temp.newsTitle = RECORDS
temp.newsTitle {
  source = {GP:tx_news_pi1|news}
  source.insertData = 1
  tables = tx_news_domain_model_news
  conf {
    tx_news_domain_model_news >
    tx_news_domain_model_news = TEXT
    tx_news_domain_model_news {
      field = title
      noTrimWrap = |<title>| - GesBiT</title>|
    }
  }
}

page.headerData {
  5 >
  5 = COA
  5 < temp.newsTitle
}
[global]

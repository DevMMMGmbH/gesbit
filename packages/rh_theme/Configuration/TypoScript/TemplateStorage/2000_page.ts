page = PAGE

# keywords, description, abstract
page.meta.keywords.field = keywords
page.meta.description.field = description
page.meta.abstract.field = abstract

page.meta.viewport = width=device-width, initial-scale=1, maximum-scale=1

# automatische Verlinkung von Telefonnummern abschalten
#page.meta.format-detection = telephone=no

page.10 = FLUIDTEMPLATE
page.10{
  partialRootPath = EXT:rh_theme/Resources/Private/Partials
  layoutRootPath = EXT:rh_theme/Resources/Private/Layouts

  variables{
    contentMain < styles.content.get
    contentMainRight < styles.content.getRight
    contentMainRight.slide = -1
    contentMainRight.renderObj.stdWrap.wrap = <div class="rightbox">|</div>

  }
  file = EXT:rh_theme/Resources/Private/Templates/DefaultTemplate.html
}

page.includeJSFooter.main = EXT:rh_theme/Resources/Public/Js/Main.js

// [globalVar = TSFE:id=6]||[globalVar = TSFE:id=43]
[getTSFE().id in [6,43]]
page.10.variables.contentMainRight.renderObj.stdWrap.wrap >
[global]

// [globalVar=TSFE:page|layout=1]
// [page["layout"] == '1']
[traverse(page, "layout") == 1]
page.includeCSS{
  einespalte = EXT:rh_theme/Resources/Public/Css/einespalte.scss
  einespalte.media = all
}
[global]

page.includeJSFooter.mobil = EXT:rh_theme/Resources/Public/Js/Mobil.js
page.includeJSFooter.main = EXT:rh_theme/Resources/Public/Js/Main.js


// [PIDinRootline = 6]
[6 in tree.rootLineIds]
page.includeJSFooter.newscat = EXT:rh_theme/Resources/Public/Js/Newscat.js
[global]

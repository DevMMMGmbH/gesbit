lib.metanavi = COA
lib.metanavi{
wrap = <div id="headernaviwrap"><div id="metanaviwrap">|<div style="clear:both;"></div></div>
  1 = HMENU
  1{
    special = directory
    special.value = 2
    wrap = <nav><ul id="metanavi">|</ul></nav>
    1 = TMENU
    1{

      NO = 1
      NO.linkWrap = <li class="first">|</li>|*|<li>|</li>|*|<li>|</li>

      ACT = 1
      ACT.linkWrap = <li class="first">|</li>|*|<li>|</li>|*|<li>|</li>
      ACT.ATagParams = class="akt"

    }
  }

  2 = IMAGE
  2.file = EXT:rh_theme/Resources/Public/Img/Lupe.png
  2.file.width = 33
  2.stdWrap.typolink.parameter = 76
  2.params = id="lupe" border="0"
  2.altText = zur Suche

  3 = IMAGE
  3.file = EXT:rh_theme/Resources/Public/Img/RSS_feed.png
  3.file.width = 33
  3.stdWrap.typolink.parameter = 78
 3.params = id="rssicon" border="0"
  3.altText = RSS Feed abonnieren
}

lib.hauptnavi = COA
lib.hauptnavi{
  wrap = <div id="hauptnaviwrap">|<div style="clear:both;"></div></div></div>
  1 = HMENU
  1 {
    wrap = <nav><ul id="hauptnavi">|</ul></nav>
    special = directory
    special.value = 3
    1 = TMENU
    1 {
      expAll = 1
      noBlur=1
      NO = 1
      NO.linkWrap = <li class="menuli{field:uid} first">|</li>|*|<li class="menuli{field:uid}">|</li>|*|<li class="menuli{field:uid} last">|</li>
      NO.ATagParams = class="menua{field:uid}"
      NO.allStdWrap.insertData = 1
      NO.doNotLinkIt = 0

      ACT = 1
      ACT.linkWrap = <li class="menuli{field:uid} first akt">|</li>|*|<li class="akt menuli{field:uid}">|</li>|*|<li class="menuli{field:uid} akt last">|</li>
      ACT.ATagParams = class="menua{field:uid} akt"
      ACT.allStdWrap.insertData = 1
      ACT.doNotLinkIt = 0

      IFSUB = 1
      IFSUB.linkWrap = <li class="menuli{field:uid} first has-submenu">||*|<li class="menuli{field:uid} has-submenu">||*|<li class="menuli{field:uid} last has-submenu">|
      IFSUB.allStdWrap.insertData = 1
      IFSUB.ATagParams = class="menua{field:uid}"
      IFSUB.doNotLinkIt = 0

      ACTIFSUB = 1
      ACTIFSUB.linkWrap = <li class="menuli{field:uid} akt first has-submenu">||*|<li class="menuli{field:uid} has-submenu akt">||*|<li class="menuli{field:uid} akt last has-submenu">|
      ACTIFSUB.ATagParams = class="menua{field:uid} akt"
      ACTIFSUB.allStdWrap.insertData = 1
      ACTIFSUB.doNotLinkIt = 0
    }
  }
}


lib.subnavi = COA

[10 in tree.rootLineIds || 11 in tree.rootLineIds || 12 in tree.rootLineIds]
lib.subnavi{
  wrap =<div id="subnaviboxwrap">|<div style="clear:both; "></div></div>
  1 = HMENU
  1{
    entryLevel = 2

    1 = TMENU
    1 {

      wrap = <div id="subnavibox"><ul class="level1">|</ul></div>
      NO = 1

      NO.linkWrap = <li class="first menu{field:uid}">|</li>|*|<li class="menu{field:uid}">|</li>|*|<li class="last menu{field:uid}">|</li>
      NO.allStdWrap.insertData = 1

      ACT = 1
      ACT.ATagParams = class="aktiv"
      ACT.linkWrap = <li class="first aktiv menu{field:uid}">|</li>|*|<li class="aktiv menu{field:uid}">|</li>|*|<li class="aktiv last menu{field:uid}">|</li>
      ACT.allStdWrap.insertData = 1

      IFSUB = 1
      IFSUB.linkWrap = <li class="first hassub menu{field:uid}">||*|<li class="hassub menu{field:uid}">||*|<li class="hassub last menu{field:uid}">|
      IFSUB.allStdWrap.insertData = 1

      ACTIFSUB = 1
      ACTIFSUB.linkWrap = <li class="first hassub aktiv menu{field:uid}">||*|<li class="hassub aktiv menu{field:uid}">||*|<li class="hassub last aktiv menu{field:uid}">|
      ACTIFSUB.ATagParams = class="aktiv"
      ACTIFSUB.allStdWrap.insertData = 1
    }

    2 = TMENU
    2{
      wrap = <ul class="level2">|</ul></li>

      NO = 1
      NO.linkWrap = <li class="first menu{field:uid}">|</li>|*|<li class="menu{field:uid}">|</li>|*|<li class="last menu{field:uid}">|</li>
      NO.allStdWrap.insertData = 1

      ACT = 1
      ACT.ATagParams = class="aktiv"
      ACT.linkWrap = <li class="first aktiv menu{field:uid}">|</li>|*|<li class="aktiv menu{field:uid}">|</li>|*|<li class="aktiv last menu{field:uid}">|</li>
      ACT.allStdWrap.insertData = 1
    }

  }

}
[global]


[2 in tree.rootLineIds]
lib.subnavi{
  wrap =<div id="metasubnaviboxwrap">|<div style="clear:both;"></div></div>
  1 = HMENU
  1{
    entryLevel = 2

    1 = TMENU
    1 {

      wrap = <div id="metasubnavibox"><ul class="level1">|</ul></div>
      NO = 1

      NO.linkWrap = <li class="first menu{field:uid}">|</li>|*|<li class="menu{field:uid}">|</li>|*|<li class="last menu{field:uid}">|</li>
      NO.allStdWrap.insertData = 1

      ACT = 1
      ACT.ATagParams = class="aktiv"
      ACT.linkWrap = <li class="first aktiv menu{field:uid}">|</li>|*|<li class="aktiv menu{field:uid}">|</li>|*|<li class="aktiv last menu{field:uid}">|</li>
      ACT.allStdWrap.insertData = 1

      IFSUB = 1
      IFSUB.linkWrap = <li class="first hassub menu{field:uid}">||*|<li class="hassub menu{field:uid}">||*|<li class="hassub last menu{field:uid}">|
      IFSUB.allStdWrap.insertData = 1

      ACTIFSUB = 1
      ACTIFSUB.linkWrap = <li class="first hassub aktiv menu{field:uid}">||*|<li class="hassub aktiv menu{field:uid}">||*|<li class="hassub last aktiv menu{field:uid}">|
      ACTIFSUB.ATagParams = class="aktiv"
      ACTIFSUB.allStdWrap.insertData = 1
    }
  }
}
[global]


[getTSFE().id in [6,43]]
lib.subnavi >
[global]

lib.breadcrumb = HMENU
lib.breadcrumb {

  special = rootline
  special.range = 0|-1
  wrap =  |
  includeNotInMenu = 1
  excludeUidList = 1
  1 = TMENU
  1 {
    wrap = |
    includeNotInMenu = 1
    noBlur = 1
    NO = 1
    NO.linkWrap = |&nbsp;&gt;&nbsp;
    CUR = 1
    CUR.doNotLinkIt = 1
    CUR.allWrap = |
  }
}

lib.smartnavi = COA
lib.smartnavi{
  wrap = <div id="smartnaviwrap"><a class="menu-link"></a>|</div>

  1 = HMENU
  1 {
    wrap = <nav><ul id="smartnavi" class="level1">|
    special = directory
    special.value = 3
    1 = TMENU
    1 {
      expAll = 1
      noBlur=1
      NO = 1
      NO.linkWrap = <li class="menuli{field:uid} first">|</li>|*|<li class="menuli{field:uid}">|</li>|*|<li class="menuli{field:uid} last">|</li>
      NO.ATagParams = class="menua{field:uid}"
      NO.allStdWrap.insertData = 1
      NO.doNotLinkIt = 0

      ACT = 1
      ACT.linkWrap = <li class="menuli{field:uid} first akt">|</li>|*|<li class="akt menuli{field:uid}">|</li>|*|<li class="menuli{field:uid} akt last">|</li>
      ACT.ATagParams = class="menua{field:uid} akt"
      ACT.allStdWrap.insertData = 1
      ACT.doNotLinkIt = 0

      IFSUB = 1
      IFSUB.linkWrap = <li class="menuli{field:uid} first hassub">||*|<li class="menuli{field:uid} hassub">||*|<li class="menuli{field:uid} last hassub">|
      IFSUB.allStdWrap.insertData = 1
      IFSUB.ATagParams = class="menua{field:uid}"
      IFSUB.doNotLinkIt = 0

      ACTIFSUB = 1
      ACTIFSUB.linkWrap = <li class="menuli{field:uid} akt first hassub">||*|<li class="menuli{field:uid} hassub akt">||*|<li class="menuli{field:uid} akt last hassub">|
      ACTIFSUB.ATagParams = class="menua{field:uid} akt"
      ACTIFSUB.allStdWrap.insertData = 1
      ACTIFSUB.doNotLinkIt = 0
    }



    2 = TMENU
    2 {
      wrap = <ul class="level2">|</ul>
      expAll = 1
      noBlur=1

      NO = 1

      NO.linkWrap = <li class="first menu{field:uid}">|</li>|*|<li class="menu{field:uid}">|</li>|*|<li class="last menu{field:uid}">|</li>
      NO.allStdWrap.insertData = 1

      ACT = 1
      ACT.ATagParams = class="akt"
      ACT.linkWrap = <li class="first akt menu{field:uid}">|</li>|*|<li class="akt menu{field:uid}">|</li>|*|<li class="akt last menu{field:uid}">|</li>
      ACT.allStdWrap.insertData = 1

      IFSUB = 1
      IFSUB.linkWrap = <li class="first hassub menu{field:uid}">||*|<li class="hassub menu{field:uid}">||*|<li class="hassub last menu{field:uid}">|
      IFSUB.allStdWrap.insertData = 1

      ACTIFSUB = 1
      ACTIFSUB.linkWrap = <li class="first hassub akt menu{field:uid}">||*|<li class="hassub akt menu{field:uid}">||*|<li class="hassub last akt menu{field:uid}">|
      ACTIFSUB.ATagParams = class="akt"
      ACTIFSUB.allStdWrap.insertData = 1
    }

    3 = TMENU
    3{
      wrap = <ul class="level3">|</ul></li>

      NO = 1
      NO.linkWrap = <li class="first menu{field:uid}">|</li>|*|<li class="menu{field:uid}">|</li>|*|<li class="last menu{field:uid}">|</li>
      NO.allStdWrap.insertData = 1

      ACT = 1
      ACT.ATagParams = class="akt"
      ACT.linkWrap = <li class="first akt menu{field:uid}">|</li>|*|<li class="akt menu{field:uid}">|</li>|*|<li class="akt last menu{field:uid}">|</li>
      ACT.allStdWrap.insertData = 1
    }
  }

  2 < .1
  2.wrap = |</ul></nav>
  2.special.value = 2

  3 < lib.metanavi.2
  3.file.width = 66
  3.file.height = 66

4 < lib.metanavi.3
  4.file.width = 66
  4.file.height = 66
4.wrap = <div class="smartrssicon">|</div>

}

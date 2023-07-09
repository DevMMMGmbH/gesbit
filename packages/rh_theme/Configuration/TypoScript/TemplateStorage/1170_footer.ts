
lib.footerlinks = COA
lib.footerlinks{
  1 = COA
  1.wrap = <div class="linkblock">|</div>
  1{
    1 = TEXT
    1.stdWrap.typolink.parameter = 10
    1.wrap = <h3>|</h3>
    2 = HMENU
    2{
      wrap = <nav><ul>|</ul></nav>
      special = directory
      special.value = 10
      1 = TMENU
      1{
	NO = 1
	NO.linkWrap = <li>|</li>
	ACT = 1
	ACT.linkWrap = <li>|</li>
	ACT.ATagParams = class="akt"
      }
    }
  }

  2 < .1
  2.1.stdWrap.typolink.parameter = 11
  2.2.special.value = 11

  3 < .1
  3.1.stdWrap.typolink.parameter = 12
  3.2.special.value = 12

  4 < .1
  4.1 >
  4.1 = TEXT
  4.1.value = Service
  4.1.wrap = <h3>|</h3>
  4.2.special.value = 2
}



lib.footernavi = COA
lib.footernavi {
wrap = <div id="footernaviwrap">|</div>

  1 = HMENU
  1{
    special = directory
    special.value = 4
    wrap = <nav><ul id="footernavi">|
    1 = TMENU
    1{
      NO = 1
      NO.linkWrap = <li class="first">|</li>|*|<li>|</li>|*|<li>|</li>
      
      ACT = 1
      ACT.linkWrap = <li class="first">|</li>|*|<li>|</li>|*|<li>|</li>
      ACT.ATagParams = class="akt"

    }
  }

  2 = TEXT
  2.wrap = |</ul></nav>
  2.value = <li><a class="printlink" href="javascript:window.print();">Drucken</a></li>
  
}



#shariff
page.javascriptLibs.jQuery = 0
page.javascriptLibs.jQuery.version = latest
page.javascriptLibs.jQuery.source = local


page.includeJSFooter.shariff = EXT:rx_shariff/Resources/Public/JavaScript/shariff.min.js
page.includeCSS.shariff = EXT:rx_shariff/Resources/Public/Css/shariff.complete.css

lib.shariffBackendUrl < plugin.rx_shariff.data-backend-url

tt_content.list.20.rxshariff_shariff {
        settings {
                enableBackend = 0
                data {
                        lang = de
                        mail-body =
                        mail-subject =
                        mail-url = mailto:
                        media-url = null
                        orientation = horizontal
                        referrer-track = null
                        services = facebook,twitter,mail
                        theme = white
                        twitter-via = null
                }
        }
}





lib.footer = COA
lib.footer{
  1 = COA
  1{
    wrap = <div id="footerbox"><div id="footerinner">|<div style="clear:both;"></div></div><div style="clear:both;"></div></div>
    1 < lib.footerlinks
    1.wrap = <div id="footerlinkswrap">|</div>
    2 < tt_content.list.20.rxshariff_shariff  
 
  }
  
  2 = COA
  2{
    wrap = <div id="footerbottom">|</div>
    1 = TEXT
    1.data = date : U
    1.strftime = %Y
    1.noTrimWrap = |© | GesBiT - Gesellschaft für Bildung und Teilhabe mbH|
   1.wrap3 = <div id="footerbottomlinks">|</div>

    2 < lib.footernavi
      

    
  }
}

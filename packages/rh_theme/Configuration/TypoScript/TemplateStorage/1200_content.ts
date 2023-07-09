// tt_content.image.20.maxW.cObject = CASE
// tt_content.image.20.maxW.cObject {
// key.field = colPos
// ## Normal
//     0 = TEXT
//     0.value = 608
// ## Right
//     2 = TEXT
//     2.value = 304
// }



// [global]
// // [globalVar = TSFE:id=1]
// [getTSFE().id == 1]
// tt_content.image.20.maxW.cObject {
// key.field = colPos

//   ## Left
//   1 = TEXT
//   1.value = 304
// }
// [global]

# Dateilinks
tt_content.uploads.20.renderObj.15.file.import.wrap = |.png
tt_content.uploads.20.renderObj.15.file.import = fileadmin/fileicons/
tt_content.uploads.20.renderObj.15.file.import.dataWrap >
tt_content.uploads.20.renderObj.40.if >

temp.filename < tt_content.uploads.20.renderObj.30
temp.filesize < tt_content.uploads.20.renderObj.40

tt_content.uploads.20.renderObj.30 < temp.filesize
tt_content.uploads.20.renderObj.40 < temp.filename

#tt_content.uploads.20.wrap = <div style="">|</div>

# toTop Link

#tt_content.stdWrap.innerWrap2 = |<div class="totop"><a href="#top">zum Seitenanfang</a></div>

// [globalVar = TSFE:id=85]

// page.cssInline {
// 	133 = TEXT
// 	133.value (
// #main #content .news-list-view .article a.more {display:none;}

// 		}
// 	)
// }
// [global]

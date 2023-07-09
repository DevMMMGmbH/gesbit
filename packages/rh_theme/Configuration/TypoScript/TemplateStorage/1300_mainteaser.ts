lib.mainteaser = COA

// [PIDinRootline = 10,11,12]
[10 in tree.rootLineIds || 11 in tree.rootLineIds || 12 in tree.rootLineIds]
lib.mainteaser = COA
lib.mainteaser{
  wrap = <div id="mainteaserwrap">|<div style="clear:both;"></div></div>
  1 = IMAGE
  1.wrap = <div id="mainteaserimg">|</div>
  1{
    file {
      import.data = levelmedia:-1, slide
      treatIdAsReference = 1
      import.listNum = 0
	width = 800c
	height = 500
    }
  }

  2 = TEXT
  2.data = levelfield : -1, subtitle, slide
  2.wrap = <div class="hellblau mainteasertext"><div>|</div></div>
}
[end]
// [PIDinRootline = 11]
[11 in tree.rootLineIds]
lib.mainteaser.2.wrap = <div class="rot mainteasertext"><div>|</div></div>
[end]

// [PIDinRootline = 12]
[12 in tree.rootLineIds]
lib.mainteaser.2.wrap = <div class="gruen mainteasertext"><div>|</div></div>
[end]

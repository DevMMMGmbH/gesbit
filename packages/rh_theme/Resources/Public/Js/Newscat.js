jQuery( document ).ready( function( $ ) {
$("#c60 ul").append('<li><a href="/blog/">Alle Beitr&auml;ge</a></li>');

$("#c300 ul").append('<li><a href="/blog/">Alle Beitr&auml;ge</a></li>');
$("#c300 div.news").prepend('<a class="catmenu-link"><h2>Bitte wählen Sie</h2></a>');

    $catmenulink = $('.catmenu-link'),

    $catmenulink.click(function(e) {
	e.preventDefault();
	$catmenulink.toggleClass('active');
	$(this).next('ul').toggleClass('active');
    });

});

jQuery( document ).ready( function( $ ) {
    $('body').addClass('js');
    var $menu = $('#smartnavi'),
    $menulink = $('.menu-link'),
    $menuTrigger = $('.hassub');

    $('.hassub').prepend('<span class="toChild"></span>');
    $('.hassub.akt').children('span.toChild').toggleClass('akt');
//    $('.hassub.akt').next('a').toggleClass('akt');
    $('.level1').children('li.hassub.akt').children('ul').toggleClass('akt');
    $('.level2').children('li.hassub.akt').children('ul').toggleClass('akt');

    $menulink.click(function(e) {
	e.preventDefault();
	$menulink.toggleClass('active');
	$menu.toggleClass('active');
    });

    $('.toChild').click(function(e){
	$(this).toggleClass('akt');
	$(this).next('a').toggleClass('akt').next('ul').toggleClass('akt');
    });


});

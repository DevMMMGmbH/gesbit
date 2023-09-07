jQuery(document).ready(function ($) {
    $('body').addClass('js');

    $('.weiterlesen').before('<div class="before show">weiterlesen</div>').append('<div class="after">weniger</div>');

    var $weiterlesen = $('.before'),
        $weniger = $('.after');

    $weiterlesen.click(function (e) {
        e.preventDefault();
        $(this).toggleClass('show');
        $(this).next('.weiterlesen').toggleClass('open');
    });

    $weniger.click(function (e) {
        e.preventDefault();
        $(this).parent('.weiterlesen').toggleClass('open');
        $(this).parent('.weiterlesen').prev('.before').toggleClass('show');
    });

    $('.accordion .accordion-header').click(function () {
        $(this).toggleClass('open');
        $accordion_content = $(this).next('.accordion .accordion-content');
        $('.accordion .accordion-content').not($accordion_content).slideUp();
        $('.accordion .accordion-content').not($accordion_content).prev('.accordion .accordion-header').removeClass('open');
        $accordion_content.stop(true, true).slideToggle(400);
    });

});

// Preloader

$(window).load(function() {
    $("#loader .icon").fadeOut();
    $("#loader").fadeOut("slow");
});

//----------------------------------------------------------------

jQuery(document).ready(function() {

    // Hero full viewport height
    $("#hero").height($(window).height());

    $(window).resize(function() {
        $("#hero").height($(window).height());
    });

    //----------------------------------------------------------------

    // Smooth Page Scrolling
    jQuery('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //----------------------------------------------------------------

    // Brands slider
    jQuery("#brands-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [600, 2],
        itemsMobile: [479, 1],
        slideSpeed: 400,
        mouseDrag: false,
        pagination: false,
        autoPlay: true
    });

    //----------------------------------------------------------------

    // Animation reveal on scroll
    new WOW().init();

    //----------------------------------------------------------------

    // Scrollspy
    jQuery('body').scrollspy({
        target: '.navbar-static-top'
    });

    //----------------------------------------------------------------

    // Closes responsive menu on nav link click
    jQuery('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    //----------------------------------------------------------------

    // Sticky nav: add .scrolled class after scrolling 50px
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#navigation').addClass('scrolled');
        } else {
            $('#navigation').removeClass('scrolled');
        }
    });

    //----------------------------------------------------------------

    // Scroll to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    //----------------------------------------------------------------

});

jQuery(function($) {
    "use strict";

    // Scroll to top functionality
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });

    $('#return-to-top').on('click', function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });

    // Side navigation toggle
    $('.gb_toggle').on('click', function() {
        product_review_Keyboard_loop($('.side_gb_nav'));
    });

    // Preloader fade out
    setTimeout(function() {
        $(".loader").fadeOut("slow");
    }, 1000);

});

// Mobile responsive menu
function product_review_menu_open_nav() {
    jQuery(".sidenav").addClass('open');
}

function product_review_menu_close_nav() {
    jQuery(".sidenav").removeClass('open');
}

// slider left
jQuery(document).ready(function($) {
  $(document).ready(function() {
    $('#slider .slides.owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      rtl: false,
      items: 1,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  });
});

// serv 1
jQuery(document).ready(function($) {
  $(document).ready(function() {
    $('.serv-1.owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      rtl: false,
      items: 1,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  });
});
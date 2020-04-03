/*-----------------------------------------------------------------------------------


 Theme Name: Amar office
 Theme URI: http://
 Description: Single page template
 Author: Saros IT
 Author URI: http://sarosit.com
 Version: 1.0

-----------------------------------------------------------------------------------*/


$(document).ready(function(){

    "use strict";

    var wind = $(window);

    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });

    $("#toggle_btn").click(function() {
        var elem = $("#toggle_btn span").text();
        if (elem == "Show More") {
        //Stuff to do when btn is in the read more state
        $("#toggle_btn span").text("Show Less");
        $("#hide").slideDown();
        } else {
        //Stuff to do when btn is in the read less state
        $("#toggle_btn span").text("Show More");
        $("#hide").slideUp();
        }
    })

    $(".amar-office-video").YouTubePopUp();

    // Testimonials owlCarousel
    $('#testimonial-wrapper').owlCarousel({
        items:1,
        loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:500,
        dots: true
    });

      // Team owlCarousel
      $('#clients').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay:true,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });

    new WOW({
        mobile: false,
    }).init();

    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#backToTop').fadeIn('slow');
        } else {
            $('#backToTop').fadeOut('slow');
        }
    });
    $('#backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

});

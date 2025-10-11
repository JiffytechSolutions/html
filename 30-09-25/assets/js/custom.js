$(document).ready(function() {
    // $('.menu-icon').click(function() {
    //     $('.nav').toggle();
    // }); 
   $('.menu-icon').click(function() { 
        $('.mobile-menu').addClass('active');
   })
   $('.close-icon').click(function() {
        $('.mobile-menu').removeClass('active');
   })
   
   $(window).resize(function() {
        var deviceWidth = $(window).width();
        if(deviceWidth < 768) {
            $('.nav').clone().appendTo('.mobile_menu_body');
        }
    })
    // Slick slider js
    $('.slick-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
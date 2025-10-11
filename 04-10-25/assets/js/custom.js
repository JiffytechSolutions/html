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


    // Dark mode to light mode js
    // $('.make-to-dark').click(function() {
    //     $(':root').css('--dark-color', '#fff');
    //     $(':root').css('--light-color', '#000');
    //     $(':root').css('--border-color', '#333');
    //     $(':root').css('--boxshadow-color', '2px 3px 3px #ffffff12');
    //     $(':root').css('--gray-bg', '#0000000d');
    //     $('.make-to-dark').hide();
    //     $('.make-to-light').show();
    // });
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        $('#darkLightmode').attr('data-theme', savedTheme);
    }
    $('.make-to-dark').on('click', function() {
        $('#darkLightmode').attr('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    })
    $('.make-to-light').on('click', function() {
        $('#darkLightmode').attr('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    })
});



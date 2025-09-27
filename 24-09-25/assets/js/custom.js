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

});
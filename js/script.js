$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".main-navbar").addClass("navbar_setbg");
    }else{
        $(".main-navbar").removeClass("navbar_setbg");
    }
}); 
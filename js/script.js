$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".main-navbar").addClass("navbar_setbg");
    }else{
        $(".main-navbar").removeClass("navbar_setbg");
    }
}); 
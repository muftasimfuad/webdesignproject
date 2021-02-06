$(function(){
    /* mobile menu  start*/
    //button toggle
    $("#wrapper").click( function() {
        $(".icon").toggleClass("cross");
    });
    //show menu
    $(".mobile_btn").click(function(){
        $(".sideMenu_wrapper").toggleClass("menu_active");
    });
    /* mobile menu end*/
});
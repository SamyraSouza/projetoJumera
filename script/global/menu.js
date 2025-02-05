$(document).ready(function () {

    $('.tabler--menu-2').on("click", function () {
        $('.mobile').toggleClass('close','open')
        $('.nav-menu_mobile').toggleClass('close','open')
    });

    $("#pag_mobile").click(function () {
        $("#click-nav_pag_mobile").slideToggle();
    });
    $("#adote_mobile").click(function () {
        $("#click-nav_adote_mobile").slideToggle();
    });


});
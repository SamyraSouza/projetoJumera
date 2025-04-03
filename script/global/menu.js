$(document).ready(function () {
    
    // Alterna o menu mobile
    $('.tabler--menu-2').on("click", function () {
        $('.mobile').toggleClass('close');
        $('.nav-menu_mobile').slideToggle();
    });

    // Controle de exibição de submenus
    $("#pag_mobile").click(function () {
        $("#click-nav_pag_mobile").slideToggle();
    });
    $("#adote_mobile").click(function () {
        $("#click-nav_adote_mobile").slideToggle();
    });
});

// Scroll navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#5b337a';
        header.style.boxShadow = '-10px 10px 10px rgba(0, 0, 0, 0.19)';
        logo.src = '../img/global/logonav.png';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
        logo.src = '../img/global/logopng.ico';
    }
});
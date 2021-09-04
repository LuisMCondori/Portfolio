
$(document).ready(function(){
    //Animacion de Navegador
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        }else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    //Animacion de Menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});



//typing animation script
var typed = new Typed(".typing", {
    strings: ["Desarrollador Web.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
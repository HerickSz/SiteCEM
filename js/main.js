$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('blue');
    }
    else {
        $('nav').removeClass('blue');
    }
})
$(document).ready(function () {
    $(".menu svg").click(function () {
        $("nav ul").toggleClass("active")
    })
})



$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
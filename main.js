$(document).foundation();
var stickyElem = new Foundation.Sticky($(".top-bar"), {
    marginTop: 0
});

$(".top-bar").on("sticky.zf.stuckto:top", function () {
    $(".sticky-container").fadeIn();
});
$(".top-bar").on("sticky.zf.unstuckfrom:top", function () {
    $(".sticky-container").fadeOut();
});



$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$(document).ready(function () {

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

});

$(document).ready(function () {
    $(".carousel").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
    });
});

$(document).ready(function () {
    $("#product_all").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    });
});
$(document).ready(function () {
    $("#product_all2").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
    });
});

window.onload = function () {
    slideOne();
    slideTwo();
};

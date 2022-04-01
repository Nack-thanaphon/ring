$(document).foundation();
var stickyElem = new Foundation.Sticky($(".top-bar"), {
    marginTop: 0
});

$(".top-bar").on("sticky.zf.stuckto:top", function() {
    $(".sticky-container").fadeIn();
});
$(".top-bar").on("sticky.zf.unstuckfrom:top", function() {
    $(".sticky-container").fadeOut();
});



$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$(document).ready(function() {

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

});
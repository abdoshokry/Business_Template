// $(document).ready(function() {
//     $(".owl-carousel").owlCarousel({ margin: 20, loop: true, nav: true, navText: ["<", ">"], autoplay: true, autoplayHoverPause: true });
// });
$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 800) {

        $("#btnup").fadeIn(500);
    } else {

        $("#btnup").fadeOut(500);
    }


})
$("#btnup").click(function() {
    $("body, html").animate({ scrollTop: 0 }, 1000)
})
$("a").click(function() {
    let Hraf = $(this).attr("href");
    let webs = $(Hraf).offset().top;
    $("body,html").animate({ scrollTop: webs }, 1000)
})
$('.content__imgs .item').click(function(){
    $("#myModal").show();
})
$('.close').click(function(){
    $("#myModal").hide();
})
$('.owl-carousel').owlCarousel({
    items:1,
loop:true,
margin:10,
nav:true,
dots: false,
URLhashListener:true,
responsive:{
0:{
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
}
}
})
$(function() {
$('.content__imgs').slick({
slidesToShow: 1,
slidesToScroll: 1,
mobileFirst: true,
arrows: true,
dots: false,
autoplay: true,
responsive: [
    {
        breakpoint: 700,
        slidesToShow: 10,
        settings: 'unslick'
    }
]
});

$(window).on('resize', function() {
$('.content__imgs').slick('resize');
});

});
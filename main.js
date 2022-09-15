$(function(){
$('.slider__box').slick({
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="left.svg">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="right.svg">',
    responsive: [
        {
            breakpoint: 481,
            settings: {
                arrows: false
            }
        }
    ]
});
$('.menu-btn').on('click', function(){
    $('.menu__list').toggleClass('active');
});
});
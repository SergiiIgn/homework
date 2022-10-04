$('.about-items > div').on('click', function(){
    $(this).children('.about-icon-box').children('.about-icon').toggleClass('about-rotate_icon');
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).children('.about-pretitle_box').children('.about-text').slideToggle(300);
    $(this).children('.about-location').toggleClass('change-color');
    $(this).children('.about-icon').toggleClass('change-color');
});

$('.features-item > div').on('click', function(){
    $(this).next('.features-text').slideToggle(300);
    $(this).children('.features-pretitle').toggleClass('features-change-color');
    $(this).children('.features-icon').children('.features-icon_img').toggleClass('features-change-color-icon');
    $(this).next('').next('.features-line').toggleClass('features-change-color-line');
})

$('.main').parallax({imageSrc: '../img/main/main-bg.png', speed: 0.5});

$('.surfing').parallax({imageSrc: '../img/surfing/sea.png', speed: 0.6});

$('#surfing-link').on('click', function(e){
    e.preventDefault();
    document.getElementById('toggleCheckbox').checked = false
    $('body').css({'overflow': "visible"})
    $('html, body').animate({scrollTop: $('#surfing').offset().top})
});

$('#about-link').on('click', function(e){
    e.preventDefault();
    document.getElementById('toggleCheckbox').checked = false
    $('body').css({'overflow': "visible"})
    $('html, body').animate({scrollTop: $('#about').offset().top})
});

$('#guides-link').on('click', function(e){
    e.preventDefault();
    document.getElementById('toggleCheckbox').checked = false
    $('body').css({'overflow': "visible"})
    $('html, body').animate({scrollTop: $('#guides').offset().top})
});

$('#family-link').on('click', function(e){
    e.preventDefault();
    document.getElementById('toggleCheckbox').checked = false
    $('body').css({'overflow': "visible"})
    $('html, body').animate({scrollTop: $('#family').offset().top})
});
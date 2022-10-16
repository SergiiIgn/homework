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
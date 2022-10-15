$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length == 0){
        $(this).fadeOut();
    }
});

$('.close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut();
});

$('#open-modal_accessories').on('click', function(e){
    e.preventDefault();
    $('.modal-overlay_accessories').fadeIn()
});

$('#open-modal_apparel').on('click', function(e){
    e.preventDefault();
    $('.modal-overlay_apparel').fadeIn()
});

$('#open-modal_climbing').on('click', function(e){
    e.preventDefault();
    $('.modal-overlay_climbing').fadeIn()
});

$('#open-modal_headwear').on('click', function(e){
    e.preventDefault();
    $('.modal-overlay_headwear').fadeIn()
});

$('#open-modal_hiking').on('click', function(e){
    e.preventDefault();
    $('.modal-overlay_hiking').fadeIn()
});

$('#open-modal_jackets').on('click', function(e){
    e.preventDefault();
    $('.modal-overlay_jackets').fadeIn()
});
$(document).ready(function(){

    $('.card').mousemove(function(e){
        var x = e.offsetX / 15;
        var y = e.offsetY / 15;
        $(this).css('transform','rotateX(' + x + 'deg) rotateY(' + y + 'deg)');
        $(this).children('.image').css({'top' :y, 'left' :x})
    });

    $('.card').mouseleave(function(){
        $(this).css('transform','rotateX(0deg) rotateY(0deg)');
        $(this).children('.image').css({'top':'0', 'left' :'0'})
    });
})

$(document).ready(function(){
// var f=0;
// var k=0;
var $slides=$('.slides');
var slide=1;
var slideCount=$slides.children().length;
console.log(slideCount);
var slideTime=2000;

setInterval(function(){
$slides.animate({
marginLeft: '-=100%'
},slideTime,function(){
console.log(slide);
slide++;
if(slide==slideCount){
slide=1;
$(this).css("margin-left","0%");
}
});
},3000);


$(".dot1").click(function(){
    slide=0;
    $slides.css(
    "marginLeft", -slide+'%'
);
});

$(".dot2").click(function(){
    slide=100;
    $slides.css(
    "marginLeft", -slide+'%'
);
});

$(".dot3").click(function(){
    slide=200;
    $slides.css(
    "marginLeft", -slide+'%'
);
});

$(".dot4").click(function(){
    slide=300;
    $slides.css(
    "marginLeft", -slide+'%'
);
});

$(".dot5").click(function(){
    slide=400;
    $slides.css(
    "marginLeft", -slide+'%')
    });

$("#prev").click(function(){
    slide=100;
    $slides.css(
    "marginLeft", -slide+'%'
);
});
$("#next").click(function(){
    slide=100;
    $slides.css(
    "marginLeft", +slide+'%'
);
});
});





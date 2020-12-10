
$(document).ready(function(){
var $slides=$('.slides');
var slide=1;
var slideCount=$slides.children().length;
console.log(slideCount);
var slideTime=3000;

setInterval(function(){
$slides.animate({
marginLeft: '-=100%'
},slideTime,function(){
//console.log(slide);
console.log(slideTime);
slide++;
if(slide==slideCount){
slide=1;
$(this).css("margin-left","0%");
}
});
},5000);


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
    "marginLeft", -slide+'%');
    });

$("#next").click(function(){
    console.log("clicked");
    slide--;
    if (slide==0){
        slide=5;
        $slides.css("margin-left",'0%'); 
    }
    else{
        $slides.css("margin-left", '-=100%'); 
        
    } 
});
$("#prev").click(function(){
    console.log('ftyg')
    slide++;
    if (slide>=5){
        slide=1;
        $slides.css("margin-left", '0%'); 
    }
    else{
        $slides.css("margin-left", '+=100%'); 
        
    }
    
});
});





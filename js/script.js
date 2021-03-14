var overlay = document.getElementById('overlay');
var vid = document.getElementById('video');

if(overlay.addEventListener){
        overlay.addEventListener("click", play, false)
    }else if(overlay.attachEvent){
        overlay.attachEvent("onclick", play)
    }

function play() { 
    if (vid.paused){
        vid.play(); 
        overlay.className = "o";
    }else {
        vid.pause(); 
        overlay.className = "";
    }
} 


//-----slider-----
$(document).ready(function() {

    $('.slider').slick({
        arrows: false,
        dots:true,
        speed: 800,
        autoplay: false,
        autoplaySpeed: 3500,
        slidesToShow: 1,
    });

});
var mysong=document.getElementById("mysong");
var icon=document.getElementById("logo");
icon.onclick=function(){
    if(mysong.paused){
        mysong.play();
        icon.src="pause.jpg";
    }else{
        mysong.pause(   );
        icon.src="play.jpg";
    }
}

let changesong=document.getElementById("changesong");
let icons=document.getElementById("change");

icons.onclick=function(){
    mysong.pause();
    changesong.play();
}
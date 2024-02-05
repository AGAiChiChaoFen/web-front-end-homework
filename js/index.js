var form=document.getElementsByTagName("form");

var pArr=document.getElementsByClassName("p");


for(var i=0;i<pArr.length;i++){
    pArr[i].index=i;
    pArr[i].onclick=function(){
        for(var i=1;i<form.length;i++){
            form[i].style.display="none";
        }
        form[this.index+1].style.display="block";
    }
}
/*轮播图*/
var items = document.querySelectorAll(".item");
var points = document.querySelectorAll(".point");
var btnLeft = document.getElementById("leftBtn");
var btnRight = document.getElementById("rightBtn");
var index = 0;
var time = 0;
var lastindex = 0;
var clearActive = function(){
    items[lastindex].className = 'item';
    points[lastindex].className = 'point';
}
var goIndex = function(){
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active';
}
var goLeft = function(){
   lastindex = index;
   if(index == 0) index = 4;
   else index--;
   goIndex();
}
var goRight = function(){
   lastindex = index;
    if(index == 4) index = 0;
    else index++;
    goIndex();
}
btnLeft.onclick = function(){
    goLeft();
    time = 0;
}
btnRight.onclick = function(){
    goRight();
    time = 0;
}
for(i = 0;i < points.length;i++){
    points[i].onclick = function(){
        var pointIndex = this.getAttribute("data-index");
        lastindex = index;
        index = pointIndex;
        goIndex();
        time = 0;
    }
}
var timer;
function play(){
    timer = setInterval(function(){
        time++;
        if(time == 20){
            goRight();
            time = 0;
        }
    },100)
}
play();
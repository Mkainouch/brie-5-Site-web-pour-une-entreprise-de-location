var path;
var pos;
function SlideImg(imgPath) {
    document.getElementById('sildeShow').style.backgroundImage = "url('"+imgPath+1+".jpg')";
    path=imgPath;
    pos=1;
    document.getElementById('slideContainer').style.visibility = "visible";
}

function hideSlider(){
    document.getElementById('slideContainer').style.visibility = "hidden";
}

function slidePass(i){
    pos+=i;
    if(pos==0)
    {
        pos=1;
    }
    if(pos==6)
    {
        pos=5;
    }
    document.getElementById('sildeShow').style.backgroundImage = "url('"+path+pos+".jpg')";
}
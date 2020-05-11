var path;
var pos;
var imgSrc;
var imgDest = document.getElementById('imgs');
var imgsLink = document.querySelectorAll('.carCart');
    // var imagedest = document.querySelector('#imgs');
    for(var i =0 ; i<imgsLink.length;i++){
        imgsLink[i].addEventListener("click",function(){
            var sources = this.children[1].children[0].src;
            imgDest.style.backgroundImage = 'url('+ sources + ')';
        });
    }

function SlideImg(imgPath) {
    document.getElementById('sildeShow').style.backgroundImage = "url('"+imgPath+1+".jpg')";
    path=imgPath;
    pos=1;
    document.getElementById('s-r-container').style.display = "block";
    // document.getElementById('gallery').style.display = "none";
    document.getElementById('header').style.display = "none";
    // document.getElementById('footer').style.display = "none";

}

function hideSlider(){
    document.getElementById('s-r-container').style.display = "none";
    document.getElementById('gallery').style.display = "block";
    document.getElementById('header').style.display = "block";
    document.getElementById('footer').style.display = "block";

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


// ============================================= reservation =================

const firstName = document.getElementById("firstName").value,
    lastName = document.getElementById("lastName").value,
    birthDay = document.getElementById("birthDay").value,
    fromCity = document.getElementById("fromCity").value,
    toCity = document.getElementById("toCity").value,
    startDate = document.getElementById("startDate").value,
    endDate = document.getElementById("endDate").value,
    endHour = document.getElementById("endHour").value;

function reservationForm(){
    document.getElementById('reservationContainer').style.display = "block";
    document.getElementById('slideContainer').style.display = "none";
    document.getElementById('gallery').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('footer').style.display = "none";

}
function reservationClose(){
    document.getElementById('reservationContainer').style.display = "none";
    document.getElementById('slideContainer').style.display = "block";
}
function reservationConf(){
    document.getElementById('reservationConfirmationContainer').style.display = "block";
    document.getElementById('reservationContainer').style.display = "none";
    document.getElementById('gallery').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('footer').style.display = "none";
    
}

// ====================================================

var SpanConfirmInfo = document.getElementsByClassName("fieldConfirm");
SpanConfirmInfo[0].innerHTML=reservation_form.firstName.toUpperCase();
SpanConfirmInfo[1].innerHTML=lastName.toUpperCase();
SpanConfirmInfo[2].innerHTML=birthDay.toUpperCase();
SpanConfirmInfo[3].innerHTML=fromCity.toUpperCase();


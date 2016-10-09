var findLeft = document.getElementById("car-left");
var findRight = document.getElementById("car-right");
var frontImg = document.querySelector(".client-1");
var leftImg = document.querySelector(".client-2");
var rightImg = document.querySelector(".client-3");

findLeft.addEventListener("click", function (){
  if (frontImg.style.opacity === ("1")) {
    frontImg.style.opacity = ("0.1");
    frontImg.style.zIndex = ("300");
    frontImg.style.transform = ("translate(-120px,0px)");
    leftImg.style.opacity = ("0.1");
    leftImg.style.zIndex = ("300");
    leftImg.style.transform = ("translate(285px,0px)");
    rightImg.style.opacity = ("1");
    rightImg.style.zIndex = ("500");
    rightImg.style.transform = ("translate(-150px,20px)");
  }
    else if (leftImg.style.opacity === ("1")) {
      frontImg.style.opacity = ("1");
      frontImg.style.zIndex = ("500");
      frontImg.style.transform = ("translate(30px,20px)");
      leftImg.style.opacity = ("0.1");
      leftImg.style.zIndex = ("300");
      leftImg.style.transform = ("translate(-10px,0px)");
      rightImg.style.opacity = ("0.1");
      rightImg.style.zIndex = ("300");
      rightImg.style.transform = ("translate(0px,0px)");
  }
    else {
      frontImg.style.opacity = ("0.1");
      frontImg.style.zIndex = ("300");
      frontImg.style.transform = ("translate(175px,0px)");
      leftImg.style.opacity = ("1");
      leftImg.style.zIndex = ("500");
      leftImg.style.transform = ("translate(130px,20px)");
      rightImg.style.opacity = ("0.1");
      rightImg.style.zIndex = ("300");
      rightImg.style.transform = ("translate(-295px,0px)");
  }
});

findRight.addEventListener("click", function (){
  if (frontImg.style.opacity === ("1")) {
    frontImg.style.opacity = ("0.1");
    frontImg.style.zIndex = ("300");
    frontImg.style.transform = ("translate(175px,0px)");
    leftImg.style.opacity = ("1");
    leftImg.style.zIndex = ("500");
    leftImg.style.transform = ("translate(130px,20px)");
    rightImg.style.opacity = ("0.1");
    rightImg.style.zIndex = ("300");
    rightImg.style.transform = ("translate(-295px,0px)");
  }
    else if (leftImg.style.opacity === ("1")) {
      frontImg.style.opacity = ("0.1");
      frontImg.style.zIndex = ("300");
      frontImg.style.transform = ("translate(-120px,0px)");
      leftImg.style.opacity = ("0.1");
      leftImg.style.zIndex = ("300");
      leftImg.style.transform = ("translate(285px,0px)");
      rightImg.style.opacity = ("1");
      rightImg.style.zIndex = ("500");
      rightImg.style.transform = ("translate(-150px,20px)");
  }
    else {
      frontImg.style.opacity = ("1");
      frontImg.style.zIndex = ("500");
      frontImg.style.transform = ("translate(30px,20px)");
      leftImg.style.opacity = ("0.1");
      leftImg.style.zIndex = ("300");
      leftImg.style.transform = ("translate(-10px,0px)");
      rightImg.style.opacity = ("0.1");
      rightImg.style.zIndex = ("300");
      rightImg.style.transform = ("translate(0px,0px)");
  }
});

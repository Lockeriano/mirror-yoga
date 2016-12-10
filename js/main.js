var findLeft = document.getElementById("car-left");
var findRight = document.getElementById("car-right");
var frontImg = document.querySelector(".client-1");
var leftImg = document.querySelector(".client-2");
var rightImg = document.querySelector(".client-3");
var firstQuote = document.querySelector(".first-quote");
var secondQuote = document.querySelector(".second-quote");
var thirdQuote = document.querySelector(".third-quote");

findRight.addEventListener("click", function (){
  if (frontImg.style.opacity === ("1")) {
    frontImg.style.opacity = ("0.1");
    frontImg.style.zIndex = ("300");
    frontImg.style.transform = ("translate(160px,0px)");
    leftImg.style.opacity = ("1");
    leftImg.style.zIndex = ("500");
    leftImg.style.transform = ("translate(125px,20px)");
    rightImg.style.opacity = ("0.1");
    rightImg.style.zIndex = ("300");
    rightImg.style.transform = ("translate(-150px,0px)");
    firstQuote.style.display = ("none");
    secondQuote.style.display = ("block");
    thirdQuote.style.display = ("none");
  }
    else if (leftImg.style.opacity === ("1")) {
      frontImg.style.opacity = ("0.1");
      frontImg.style.zIndex = ("300");
      frontImg.style.transform = ("translate(-100px,0px)");
      leftImg.style.opacity = ("0.1");
      leftImg.style.zIndex = ("300");
      leftImg.style.transform = ("translate(250px,0px)");
      rightImg.style.opacity = ("1");
      rightImg.style.zIndex = ("500");
      rightImg.style.transform = ("translate(-25px,20px)");
      firstQuote.style.display = ("none");
      secondQuote.style.display = ("none");
      thirdQuote.style.display = ("block");
    }
    else {
      frontImg.style.opacity = ("1");
      frontImg.style.zIndex = ("500");
      frontImg.style.transform = ("translate(30px,20px)");
      leftImg.style.opacity = ("0.1");
      leftImg.style.zIndex = ("300");
      leftImg.style.transform = ("translate(0px,0px)");
      rightImg.style.opacity = ("0.1");
      rightImg.style.zIndex = ("300");
      rightImg.style.transform = ("translate(90px,0px)");
      firstQuote.style.display = ("block");
      secondQuote.style.display = ("none");
      thirdQuote.style.display = ("none");
    }
});

findLeft.addEventListener("click", function (){
  if (frontImg.style.opacity === ("1")) {
    frontImg.style.opacity = ("0.1");
    frontImg.style.zIndex = ("300");
    frontImg.style.transform = ("translate(-100px,0px)");
    leftImg.style.opacity = ("0.1");
    leftImg.style.zIndex = ("300");
    leftImg.style.transform = ("translate(245px,0px)");
    rightImg.style.opacity = ("1");
    rightImg.style.zIndex = ("500");
    rightImg.style.transform = ("translate(-25px,20px)");
    firstQuote.style.display = ("none");
    secondQuote.style.display = ("none");
    thirdQuote.style.display = ("block");
  }
    else if (leftImg.style.opacity === ("1")) {
      frontImg.style.opacity = ("1");
      frontImg.style.zIndex = ("500");
      frontImg.style.transform = ("translate(30px,20px)");
      leftImg.style.opacity = ("0.1");
      leftImg.style.zIndex = ("300");
      leftImg.style.transform = ("translate(0px,0px)");
      rightImg.style.opacity = ("0.1");
      rightImg.style.zIndex = ("300");
      rightImg.style.transform = ("translate(100px,0px)");
      firstQuote.style.display = ("block");
      secondQuote.style.display = ("none");
      thirdQuote.style.display = ("none");
  }
    else {
      frontImg.style.opacity = ("0.1");
      frontImg.style.zIndex = ("300");
      frontImg.style.transform = ("translate(165px,0px)");
      leftImg.style.opacity = ("1");
      leftImg.style.zIndex = ("500");
      leftImg.style.transform = ("translate(120px,20px)");
      rightImg.style.opacity = ("0.1");
      rightImg.style.zIndex = ("300");
      rightImg.style.transform = ("translate(-150px,0px)");
      firstQuote.style.display = ("none");
      secondQuote.style.display = ("block");
      thirdQuote.style.display = ("none");
  }
});

var openBtn = document.querySelector(".open-btn");
var closeBtn = document.querySelector(".close-btn");
var navMenu = document.querySelector(".nav-menu");
var navMenuOpen = document.querySelector(".nav-menu-open");
var smallViewport = window.matchMedia("screen and (min-width: 768px)");

openBtn.addEventListener("click", function open(){
  if (navMenu.className === ("nav-menu")) {
    navMenu.className = ("nav-menu-open");
    openBtn.style.display = ("none");
    closeBtn.style.display = ("block");
  }
    else {
      navMenu.className = ("nav-menu");
      closeBtn.style.display = ("none");
      openBtn.style.display = ("block");
    }
});

closeBtn.addEventListener("click", function close(){
  if (navMenu.className === ("nav-menu-open")){
    navMenu.className = ("nav-menu");
    closeBtn.style.display = ("none");
    openBtn.style.display = ("block");
}
    else {
      navMenu.className = ("nav-menu-open");
      openBtn.style.display = ("none");
      closeBtn.style.display = ("block");
    }
});

smallViewport.addListener(function(mq) {
  if(mq.matches) {
    closeBtn.style.display = ("none");
    openBtn.style.display = ("none");
  }
  else if (navMenu.className === ("nav-menu-open")){
    closeBtn.style.display = ("block");
  }
  else if (navMenu.className === ("nav-menu")){
    openBtn.style.display = ("block");
  }
});

window.onscroll = function() {fixedNavbar()};

function fixedNavbar() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").className = ("navbar-fixed");
  }
  else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
    document.querySelector("nav").className = ("");
  }
};

/*smallViewport.addListener(function(matchquery) {
  if (smallViewport.matches && document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    openBtn.style.color = ("#333333");
  }
});*/
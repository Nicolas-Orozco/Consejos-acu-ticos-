const line1 = document.querySelector('.line');
var carousel = document.getElementById('carousel');
var textadvise = document.getElementById('textadvise');
let carouselbutton1 = document.getElementById('carouselbutton1');
let carouselbutton2 = document.getElementById('carouselbutton2');
let sound1 = new Audio('https://drive.google.com/uc?export=download&id=1tvHrCBnzKByMSxPkVJ2ei5yR6vZwnA5q');
let sound2 = new Audio('https://drive.google.com/uc?export=download&id=18cxn99E5PHdOH7AtlvQK1dIdONDp5LOG');
let ambtn = document.getElementById('ambientbtn');
var ambindex = 0;
   var ambientsound = new Audio('https://drive.google.com/uc?export=download&id=1-ukKbNBy-OoCKQIZ_KjtRnHISpaurOsq')
line1.addEventListener('animationend', () => {
  carousel.classList.remove("ocultar")
  carousel.classList.add("enterpostit")
});
carousel.addEventListener('animationend', () => {
  carousel.classList.remove("enterpostit")
  textadvise.classList.remove("ocultar")
  textadvise.classList.add("textup")
})
textadvise.addEventListener('animationend', () => {
  textadvise.classList.remove("textup")
})
carouselbutton1.addEventListener('click', () => {
  sound1.volume = 0.29;
  sound1.play();
})
carouselbutton2.addEventListener('click', () => {
  sound2.volume = 0.29;
  sound2.play();
})
ambtn.addEventListener('click',() => {
  ambindex++;
    for (let numero = 0; numero < 2; numero++) {
  switch(ambindex){
    case 0:
        ambientsound.pause();
    ambtn.style.backgroundColor = 'rgb(255, 45, 45)';
    break;
    case 1:
    ambientsound.volume = 0.22;
    ambientsound.play();
    ambtn.style.backgroundColor = 'rgb(99, 248, 106)';
    break;
    case 2:
    ambindex = 0;
    break;
  }
}})
ambientsound.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
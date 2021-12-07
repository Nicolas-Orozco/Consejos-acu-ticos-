const line1 = document.querySelector('.line');
line1.addEventListener('animationend', () => {
  carousel.classList.remove("ocultar")
  carousel.classList.add("enterpostit")
});
var carousel = document.getElementById('carousel');
var textadvise = document.getElementById('textadvise');
carousel.addEventListener('animationend', () => {
  carousel.classList.remove("enterpostit")
  textadvise.classList.remove("ocultar")
  textadvise.classList.add("textup")
})
textadvise.addEventListener('animationend', () => {
  textadvise.classList.remove("textup")
})
let carouselbutton1 = document.getElementById('carouselbutton1');
let sound1 = new Audio('https://drive.google.com/uc?export=download&id=1tvHrCBnzKByMSxPkVJ2ei5yR6vZwnA5q');
carouselbutton1.addEventListener('click', () => {
  sound1.volume = 0.29;
  sound1.play();
})
let carouselbutton2 = document.getElementById('carouselbutton2');
let sound2 = new Audio('https://drive.google.com/uc?export=download&id=18cxn99E5PHdOH7AtlvQK1dIdONDp5LOG');
carouselbutton2.addEventListener('click', () => {
  sound2.volume = 0.29;
  sound2.play();
})
let ambtn = document.getElementById('ambientbtn');
var ambindex = 0;
var ambientsound = new Audio('https://drive.google.com/uc?export=download&id=1-ukKbNBy-OoCKQIZ_KjtRnHISpaurOsq')
ambtn.addEventListener('click',() => {
  ambindex++;
    for (let numero = 0; numero < 2; numero++) {
  switch(ambindex){
    case 0:
        ambientsound.pause();
    ambtn.style.backgroundColor = 'rgb(255, 45, 45)';
    break;
    case 1:
    ambientsound.volume = 0.26;
    ambientsound.play();
    ambtn.style.backgroundColor = 'rgb(99, 248, 106)';
    ambtn.style.backgroundColor = 'rgb(99, 248, 106)';
    document.getElementById('arrow').style.animation="arrowfade 0.25s linear forwards";
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
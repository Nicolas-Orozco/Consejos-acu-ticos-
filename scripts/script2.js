/*TRIGGER POST IT ANIMATION WHEN LINE ENDS */
const line1 = document.querySelector('.line');
line1.addEventListener('animationend', l1 = () => {
  carousel.classList.remove("d-none");
  carousel.classList.add("enterpostit");
  debugger;
  line1.removeEventListener('animationend', l1);
});
/*REMOVE ANIMATION CLASSES, AND APPEAR TEXTADVISE WHEN CAROUSEL ANIMATIONS ENDS*/

const carousel = document.getElementById('carousel');
const textadvise = document.getElementById('textadvise');
carousel.addEventListener('animationend', l2 = () => {
  carousel.classList.remove("enterpostit");
  textadvise.classList.remove("d-none");
  textadvise.classList.add("textup");
  carousel.removeEventListener('animationend', l2);
});
/*REMOVE ANIMATION STYLES*/

textadvise.addEventListener('animationend', ta = () => {
  textadvise.classList.remove("textup");
  textadvise.removeEventListener('animationend', ta);
});
/*PLAY SOUND1 WHEN BUTTON1 OF CAROUSEL IS CLICKED*/

const carouselbutton1 = document.getElementById('carouselbutton1');
const sound1 = new Audio('https://drive.google.com/uc?export=download&id=1tvHrCBnzKByMSxPkVJ2ei5yR6vZwnA5q');
carouselbutton1.addEventListener('click', () => {
  sound1.volume = 0.40;
  sound1.play();
});
/*PLAY SOUND2 WHEN BUTTON2 OF CAROUSEL IS CLICKED*/

const carouselbutton2 = document.getElementById('carouselbutton2');
const sound2 = new Audio('https://drive.google.com/uc?export=download&id=18cxn99E5PHdOH7AtlvQK1dIdONDp5LOG');
carouselbutton2.addEventListener('click', () => {
  sound2.volume = 0.40;
  sound2.play();
});
/*SWITCH WITH INDEX, AMBIENT BUTTTON, AND PLAY THE SOUND*/

const ambtn = document.getElementById('ambientbtn');
let ambindex = 0;
const ambientsound = new Audio('https://drive.google.com/uc?export=download&id=1-ukKbNBy-OoCKQIZ_KjtRnHISpaurOsq');
ambtn.addEventListener('click', () => {
  ambindex++;

  for (let number = 0; number < 2; number++) {
    switch (ambindex) {
      case 0:
        ambientsound.pause();
        ambtn.style.backgroundColor = 'rgb(255, 45, 45)';
        break;

      case 1:
        ambientsound.volume = 0.37;
        ambientsound.play();
        ambtn.style.backgroundColor = 'rgb(99, 248, 106)';
        ambtn.style.backgroundColor = 'rgb(99, 248, 106)';
        document.getElementById('arrow').style.animation = "arrowfade 0.25s linear forwards";
        break;

      case 2:
        ambindex = 0;
        break;
    }
  }
});
/*LOOP FOR THE AMBIENT SOUND*/

ambientsound.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);
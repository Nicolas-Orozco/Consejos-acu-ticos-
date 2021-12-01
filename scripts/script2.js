const line1 = document.querySelector('.line')
  var carousel = document.getElementById('carousel')
  var textadvise = document.getElementById('textadvise')
  let carouselbutton1 = document.getElementById('carouselbutton1')
    let carouselbutton2 = document.getElementById('carouselbutton2')
      var sound1 = new Audio('https://drive.google.com/uc?export=download&id=1tvHrCBnzKByMSxPkVJ2ei5yR6vZwnA5q');
      var sound2 = new Audio('https://drive.google.com/uc?export=download&id=18cxn99E5PHdOH7AtlvQK1dIdONDp5LOG');
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
    sound1.volume = 0.27;
  sound1.play();
})
carouselbutton2.addEventListener('click', () => {
      sound2.volume = 0.27;
  sound2.play();
})

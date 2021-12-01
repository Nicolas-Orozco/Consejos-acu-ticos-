const line1 = document.querySelector('.line')
  var carousel = document.getElementById('carousel')
line1.addEventListener('animationend', () => {
  carousel.classList.remove("ocultar")
  carousel.classList.add("enterpostit")
});
carousel.addEventListener('animationend', () => {
  carousel.classList.remove("enterpostit")
})
/*FUNCTION WITH SWITCH, AND COUNT TO VIDEO SOURCE AND POSTER*/
let count = 1;
const video1 = document.getElementById("video1");
const playPromise = video1.play();

function changevideo() {
  count++;

  for (let number = 0; number < 2; number++) {
    switch (count) {
      case 1:
        video1.src = "https://drive.google.com/uc?export=download&id=16ieR8-KC9ooK5-QGEIUTH53at45h5tAe";
        video1.poster = "images/posters/poster4.jpg";

        if (playPromise !== undefined) {
          playPromise.then(_ => {}).catch(error => {});
        }

        break;

      case 2:
        video1.src = "https://drive.google.com/uc?export=download&id=1eRSO5cFHzBu7zILbAwa6FdnqDwL5iN6s";
        video1.poster = "images/posters/poster3.jpg";

        if (playPromise !== undefined) {
          playPromise.then(_ => {}).catch(error => {});
        }

        break;

      case 3:
        video1.src = "https://drive.google.com/uc?export=download&id=11lQcd0MB6NoPMr3TIkwYgrTcrTqaRCqg";
        video1.poster = "images/posters/poster2.jpg";

        if (playPromise !== undefined) {
          playPromise.then(_ => {}).catch(error => {});
        }

        break;

      case 4:
        video1.src = "https://drive.google.com/uc?export=download&id=1R4zDjVc5l4BEtc0wVlHTD0ZHLN7OxK6x";
        video1.poster = "images/posters/poster1.jpg";

        if (playPromise !== undefined) {
          playPromise.then(_ => {}).catch(error => {});
        }

        break;

      case 5:
        count = 1;
        break;
    }
  }
}
/*
document.getElementById("boton").addEventListener("click",function(){
    setTimeout(function () {
       window.location.href = "postit.html";
    }, 2000);
})
*/

/*DISPLAY THE ANIMATION, HIDE THE BUTTON, AND REDIRECT TO THE POST IT PAGE WHEN CLICKED */


const $ = document.querySelector.bind(document);
$('button').addEventListener("click", function () {
  $('button').style.display = 'none';
  $('section').style.display = 'block';
  document.getElementById("main").remove();
  window.location.href = "postit.html";
});
/*LOADING ANIMATION AND FADE */

window.onload = function () {
  let fadeTarget = document.getElementById("spinner");
  const fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 0.5;
    }

    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.15;
    } else {
      clearInterval(fadeEffect);
    }

    if (fadeTarget.style.opacity <= 0) {
      fadeTarget.remove();
    }
  }, 150);
  const main = document.getElementById("main");
  main.classList.remove("d-none");
};
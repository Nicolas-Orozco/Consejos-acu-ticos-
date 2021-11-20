/*VIDEO SWITCH*/
var count = 1;
var video1 = document.getElementById("video1");
var playPromise = video1.play()
function changevideo() {
  count++;
  for (let numero = 0; numero < 2; numero++) {
    switch (count) {
      case 1:
        video1.poster = "poster4.jpg";
        video1.src = "https://drive.google.com/uc?export=download&id=16ieR8-KC9ooK5-QGEIUTH53at45h5tAe";
        if (playPromise !== undefined) {
          playPromise.then(_ => {
          })
      .catch (error => {
          });
        }
        break;
      case 2:
        video1.poster = "poster3.jpg";
        video1.src = "https://drive.google.com/uc?export=download&id=1eRSO5cFHzBu7zILbAwa6FdnqDwL5iN6s";
        if (playPromise !== undefined) {
          playPromise.then(_ => {
          })
      .catch (error => {
          });
        }
        break;
      case 3:
        video1.poster = "poster2.jpg";
        video1.src = "https://drive.google.com/uc?export=download&id=11lQcd0MB6NoPMr3TIkwYgrTcrTqaRCqg";
        if (playPromise !== undefined) {
          playPromise.then(_ => {
          })
      .catch (error => {
          });
        }
        break;
      case 4:
               video1.poster = "poster1.jpg";
        video1.src = "https://drive.google.com/uc?export=download&id=1R4zDjVc5l4BEtc0wVlHTD0ZHLN7OxK6x";
        if (playPromise !== undefined) {
          playPromise.then(_ => {
          })
      .catch (error => {
          });
        }
        break;
      case 5:
       count = 1;
       break;
    }
  }
}

/* OLD JS FOR CHANCHING PAGE
document.getElementById("boton").addEventListener("click",function(){
    setTimeout(function () {
       window.location.href = "postit.html";
    }, 2000);
})
*/
/*FUNCTION TO CHANGE PAGE*/
const $ = document.querySelector.bind(document);
$('button').addEventListener("click", function() {
  $('button').style.display = 'none';
  $('section').style.display = 'block';
    (document.getElementById("main")).remove();
   window.location.href = "postit.html";
});

/*FUNCTION FOR LOADING SCREEN*/
video1.addEventListener('loadeddata',function(){
    this.function = function(){};
    var fadeTarget = document.getElementById("spinner");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 0.5;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.15;
        } else {
            clearInterval(fadeEffect);
        }
        if (fadeTarget.style.opacity <= 0){
           fadeTarget.remove();
        }
    }, 150);
    var main = document.getElementById("main")
    main.classList.remove("ocultar");
});
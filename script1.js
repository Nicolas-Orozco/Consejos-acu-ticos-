var count = 1;
var video1 = document.getElementById("video1");
var playPromise = video1.play()
function changevideo() {
  count++;
  for (let numero = 0; numero < 2; numero++) {
    switch (count) {
      case 1:
        video1.poster = "poster1.jpg";
        video1.src = "https://drive.google.com/uc?export=download&id=1R4zDjVc5l4BEtc0wVlHTD0ZHLN7OxK6x";
        if (playPromise !== undefined) {
          playPromise.then(_ => {
          })
      .catch (error => {
          });
        }
        break;
      case 2:
        video1.poster = "poster2.jpg";
        video1.src = "https://drive.google.com/uc?export=download&id=11lQcd0MB6NoPMr3TIkwYgrTcrTqaRCqg";
        if (playPromise !== undefined) {
          playPromise.then(_ => {
          })
      .catch (error => {
          });
        }
        break;
      case 3:
        video1.poster = "poster3.jpg";
        video1.src = "https://drive.google.com/uc?export=download&id=1eRSO5cFHzBu7zILbAwa6FdnqDwL5iN6s";
        if (playPromise !== undefined) {
          playPromise.then(_ => {
          })
      .catch (error => {
          });
        }
        break;
      case 4:
        count = 1;
        break;
    }
  }
}

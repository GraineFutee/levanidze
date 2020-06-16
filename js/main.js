setInterval(function () {
  let n = 0;
  let x = document.getElementById("welcome");
  if (x.bg) {
    n = x.bg;
    n++;
    if (n === 5) n = 0;
  }
  let listImages = [
    "viktoria-spokojna-xOIWQlUC2NI-unsplash.jpg",
    "aditya-joshi-KWTdFcVbhgA-unsplash.jpg",
    "kevin-schmid-TU21HjN9dwo-unsplash.jpg",
    "joan-villalon-otG-Gi4ebDo-unsplash.jpg",
    "cheng-feng-GqEhWbSrqRM-unsplash.jpg",
  ];
  x.style.backgroundImage = `url("img/${listImages[n]}")`;
  x.bg = `${n}`;
}, 5000);

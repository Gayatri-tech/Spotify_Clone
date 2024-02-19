console.log("Welcome to Spotify Clone");
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("./Songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
  {
    songName: "Warriyo - Mortals",
    filePath: "Songs/1.mp3",
    coverPath: "Cover_photos/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "Songs/2.mp3",
    coverPath: "Cover_photos/2.jpg",
  },
  {
    songName: "Deaf Kev - Invincible",
    filePath: "Songs/3.mp3",
    coverPath: "Cover_photos/3.jpg",
  },
  {
    songName: "Different Heaven - My Heart",
    filePath: "Songs/4.mp3",
    coverPath: "Cover_photos/4.jpg",
  },
  {
    songName: "Janji Heroes - Johnning",
    filePath: "Songs/5.mp3",
    coverPath: "Cover_photos/5.jpg",
  },
  {
    songName: "Chori Chori Dil Tera",
    filePath: "Songs/6.mp3",
    coverPath: "Cover_photos/6.jpg",
  },
  {
    songName: "Pyaar Ki Kashti Me",
    filePath: "Songs/7.mp3",
    coverPath: "Cover_photos/7.jpg",
  },
  {
    songName: "Sochenge Tumhe Pyaar",
    filePath: "Songs/8.mp3",
    coverPath: "Cover_photos/8.jpg",
  },
  {
    songName: "Kitni Hasrat Hai Hume",
    filePath: "Songs/9.mp3",
    coverPath: "Cover_photos/9.jpg",
  },
  {
    songName: "Thoda Sa Pyaar Hua Hai",
    filePath: "Songs/10.mp3",
    coverPath: "Cover_photos/10.jpg",
  },
];
// handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to events
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  // Update seek bar
  let progress = (audioElement.currentTime / audioElement.duration) * 100;
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

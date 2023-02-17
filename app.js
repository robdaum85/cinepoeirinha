const movie = document.querySelector(".video");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");

playButton.addEventListener("click", () => {
  movie.play();
});

pauseButton.addEventListener("click", () => {
  movie.pause();
});

stopButton.addEventListener("click", () => {
  movie.pause();
  movie.currentTime = 0;
});

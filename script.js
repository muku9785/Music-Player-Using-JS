let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let songItems = document.getElementsByClassName("songitems");
let songPlayButtons = document.getElementsByClassName("songitemplay");
let songs = [
  { songname: "let me love you", filepath: "mukul.mp3.mp3" },
  { songname: "Mortals", filepath: "mortals.mp3" },
  { songname: "Safari", filepath: "safari.mp3" },
  { songname: "Ride It", filepath: "rideit.mp3" },

];

for (let i = 0; i < songItems.length; i++) {
  songItems[i].getElementsByClassName("song")[0].innerText = songs[i].songname;

  songPlayButtons[i].addEventListener("click", () => {
    audioElement.pause();
    audioElement.currentTime = 0;

    if (i === songIndex) {
      audioElement.play();
      songPlayButtons[i].classList.remove("fa-play-circle");
      songPlayButtons[i].classList.add("fa-pause-circle");
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    } else {
      songIndex = i;
      audioElement.src = songs[songIndex].filepath;
      audioElement.play();
      makeAllPlay();
      songPlayButtons[songIndex].classList.remove("fa-play-circle");
      songPlayButtons[songIndex].classList.add("fa-pause-circle");
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    }
  });
}


masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myprogressbar.value = progress;
});

myprogressbar.addEventListener("input", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(songPlayButtons).forEach((button) => {
    button.classList.remove("fa-pause-circle");
    button.classList.add("fa-play-circle");
  });
};
document.querySelector(".fa-forward").addEventListener("click", () => {
  if (songIndex >= songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filepath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.querySelector(".fa-backward").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex -= 1;
  }
  audioElement.src = songs[songIndex].filepath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});



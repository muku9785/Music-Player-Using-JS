// Initialize the song index to 0, which represents the currently playing song.
let songIndex = 0;

// Create an HTML audio element for playing audio.
let audioElement = new Audio();

// Get the 'masterPlay' button and the progress bar from the HTML document.
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");

// Get an array of elements with the class 'songitems' which likely represent individual songs.
let songItems = document.getElementsByClassName("songitems");

// Get an array of elements with the class 'songitemplay' which are likely play buttons for each song.
let songPlayButtons = document.getElementsByClassName("songitemplay");

// Define an array of songs with their names and file paths.
let songs = [
  { songname: "let me love you", filepath: "mukul.mp3.mp3" },
  { songname: "Mortals", filepath: "mortals.mp3" },
  { songname: "Safari", filepath: "safari.mp3" },
  { songname: "Ride It", filepath: "rideit.mp3" },
];

// Loop through each 'songitems' element to set the song name for each.
for (let i = 0; i < songItems.length; i++) {
  songItems[i].getElementsByClassName("song")[0].innerText = songs[i].songname;

  // Add a click event listener to each song's play button.
  songPlayButtons[i].addEventListener("click", () => {
    audioElement.pause();
    audioElement.currentTime = 0;

    if (i === songIndex) {
      // Play the song if it's the same as the currently selected song.
      audioElement.play();
      // Update icons to show 'pause' state.
      songPlayButtons[i].classList.remove("fa-play-circle");
      songPlayButtons[i].classList.add("fa-pause-circle");
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    } else {
      // If a different song is selected, change the song and update UI.
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

// Add a click event listener to the 'masterPlay' button to control the master playback.
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

// Update the progress bar as the audio plays.
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myprogressbar.value = progress;
});

// Add an input event listener to the progress bar to allow seeking in the audio.
myprogressbar.addEventListener("input", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

// Define a function to make all song play buttons show the 'play' icon.
const makeAllPlay = () => {
  Array.from(songPlayButtons).forEach((button) => {
    button.classList.remove("fa-pause-circle");
    button.classList.add("fa-play-circle");
  });
};

// Add click event listeners to the forward and backward buttons for song navigation.
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

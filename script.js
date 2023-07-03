//   let songIndex = 0;
//   let audioElement = new Audio('dhakad.mp3"');
//   let masterPlay = document.getElementById('masterplay');

//   let masterplay = document.getElementById('masterplay');
  
//   let songs = [
//     {songname : "let me love you", filepath : 'dhakad.mp3'}, 
   
 
//   ]

// // audioelement.play()
// masterplay.addEventListener('click',()=>
// {if (audioElement.paused || audioElement.currentTime<=0) {
//   audioElement.play();
//   masterPlay.classList.remove('fa-play-circle');
//   masterPlay.classList.remove('fa-pause-circle');
  
// }
// })





// let songIndex = 0;
//     let audioElement = new Audio('mukul.mp3');
//     let masterPlay = document.getElementById('masterPlay');
//     let myprogressbar=document.getElementById('myprogressbar'); 





//     let songs = [
//       { songname: "let me love you", filepath: 'dhakad.mp3' },
//       { songname: "chunari chunari", filepath: 'd.mp3' }
//     ];


//  songitems.forEach(element => {
//   //  element.getElementByTagname("img")[0].src = songs[i].filepath
//   element.getElementsByClassName("song")[0].innerText
// =song[i].song;  
//  });




//     let songitems = document.getElementsByClassName('songitems')

//     masterPlay.addEventListener('click', () => {
//       if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//       } else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//       }
//     });



// audioElement.addEventListener('timeupdate',()=>{
//   progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
//   myprogressbar.value = progress;
// })
// myprogressbar.addEventListener('change',()=>{
//   audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
// })
 

let songIndex = 0;
let audioElement = new Audio('mukul.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let songs = [
  { songname: "let me love you", filepath: 'dhakad.mp3' },
  { songname: "chunari chunari", filepath: 'd.mp3' }
];

// Update song names and file paths dynamically
let songItems = document.getElementsByClassName('songitems');

for (let i = 0; i < songItems.length; i++) {
  // songItems[i].getElementsByTagName("img")[0].src = songs[i].filepath;
  songItems[i].getElementsByClassName("song")[0].innerText = songs[i].songname;
}

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
  }
});

audioElement.addEventListener('timeupdate', () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener('input', () => {
  audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;
});
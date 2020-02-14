(() => {
  // make a reference to all of the buttons
  const playButtons = document.querySelectorAll('.playButton'),
        pauseButtons = document.querySelectorAll('.pauseButton'),
        rwButtons = document.querySelectorAll('.rwButton'),
        audioElement = document.querySelector('audio');

  let globalPaused = false;

// play the song associated with the button ( its data-trackref attribute)
 function playtrack() {
   // try to fix pause play
   if (globalPaused) {
     console.log('paused');
     // if your audio is paused, then play the track and exit
     resumetrack();
     return;
   }


   //debugger;
   let audioSource = this.dataset.trackref;

   // set the audio source
   audioElement.src = `audio/${audioSource}.mp3`;

   // load and play it
   audioElement.load();
   audioElement.play();
   // playtrack();
 }
 function resumetrack() {
   globalPaused = false;
   audioElement.play();

 }
 function pausetrack() {
   globalPaused = true;
   audioElement.pause();

 }
 function rwtrack() {
   audioElement.currentTime = 0;
 }
  // process the playButtons and add some event handling
  playButtons.forEach(button => button.addEventListener("click", playtrack));
  pauseButtons.forEach(button => button.addEventListener("click", pausetrack));
  rwButtons.forEach(button => button.addEventListener("click", rwtrack));
})();

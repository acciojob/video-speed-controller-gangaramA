const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');
const progressFilled = document.querySelector('.progress__filled');
const volumeInput = document.getElementById('volume');
const playbackSpeedInput = document.getElementById('playbackSpeed');
const rewindBtn = document.getElementById('rewind');
const forwardBtn = document.getElementById('forward');

// Update video progress bar
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${progress}%`;
});

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = '❚ ❚';
  } else {
    video.pause();
    playPauseBtn.textContent = '►';
  }
});

// Volume control
volumeInput.addEventListener('input', () => {
  video.volume = volumeInput.value;
});

// Playback speed control
playbackSpeedInput.addEventListener('input', () => {
  video.playbackRate = playbackSpeedInput.value;
});

// Rewind button
rewindBtn.addEventListener('click', () => {
  video.currentTime -= 1
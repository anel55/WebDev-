const tracks = [
    { src: "Music/1.mp3", cover: "Image/1.jpg", name: "Sunflower" },
    { src: "Music/2.mp3", cover: "Image/2.jpg", name: "Please Please Please" },
    { src: "Music/3.mp3", cover: "Image/3.jpeg", name: "Die with a smile" },
    { src: "Music/4.mp3", cover: "Image/4.jpg", name: "Fe!n" }
];

let currentTrackIndex = 0;
let isPlaying = false;

const audioPlayer = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause");
const nextButton = document.getElementById("next");
const cover = document.getElementById("cover");
const trackName = document.getElementById("track-name");

function loadTrack(index) {
    audioPlayer.src = tracks[index].src;
    cover.src = tracks[index].cover;
    trackName.textContent = tracks[index].name;
}

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.textContent = "Play";
    } else {
        audioPlayer.play();
        playPauseButton.textContent = "Pause";
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playPauseButton.textContent = "Pause";
    isPlaying = true;
}

function playTrack(index) {
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playPauseButton.textContent = "Pause";
    isPlaying = true;
}

playPauseButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", nextTrack);

loadTrack(currentTrackIndex);

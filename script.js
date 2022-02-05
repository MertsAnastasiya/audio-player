const arraySongs = [
    {artist: 'Beyonce', title: "Don't heart yourself", path: './assets/audio/beyonce.mp3', pathImage: './assets/img/lemonade.png'}, 
    {artist: 'Dua Lipa', title: "Don't start now", path: './assets/audio/dontstartnow.mp3', pathImage: './assets/img/dontstartnow.png'},
];

const body = document.querySelector('body');

const song = document.querySelector('.song');
const songImg = document.querySelector('.song-img');
const songArtist = document.querySelector('.song-artist');
const songTitle = document.querySelector('.song-title');

const btnPlay = document.querySelector('.btn-play-pause');

let isPlay = false;

const playAudio = () => {
    if (!isPlay) {
        isPlay = true;
        song.play();
        btnPlay.classList.add('pause');
    } else {
        isPlay = false;
        song.pause();
        btnPlay.classList.remove('pause');
    }
}

btnPlay.addEventListener('click', playAudio);


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
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

let isPlay = false;
let playNum = 0;

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

const playNext = () => {
    playNum++;
    console.log("NEXT");
    if(playNum >= arraySongs.length) {
        playNum = 0;
    }
    song.src = arraySongs[playNum].path;
    songImg.src = arraySongs[playNum].pathImage;
    document.body.style.backgroundImage = `url(${arraySongs[playNum].pathImage})`;
    songArtist.innerHTML = arraySongs[playNum].artist;
    songTitle.innerHTML = arraySongs[playNum].title;

    isPlay = false;

    playAudio();
}

const playPrev = () => {
    playNum--;
    console.log("NEXT");
    if(playNum < 0) {
        playNum = arraySongs.length - 1;
    }

    song.src = arraySongs[playNum].path;
    songImg.src = arraySongs[playNum].pathImage;
    songArtist.innerHTML = arraySongs[playNum].artist;
    songTitle.innerHTML = arraySongs[playNum].title;

    isPlay = false;

    playAudio();
}

btnPlay.addEventListener('click', playAudio);

song.addEventListener('ended', playNext);

btnNext.addEventListener('click', playNext);
btnPrev.addEventListener('click', playPrev);


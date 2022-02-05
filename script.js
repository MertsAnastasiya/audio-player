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

const progressBar = document.querySelector('.progress-bar');
const curentTimeAudio = document.querySelector('.currentTime');
const durationAudio = document.querySelector('.durationTime');

let isPlay = false;
let playNum = 0;

const playAudio = () => {
    if (!isPlay) {
        isPlay = true;
        song.play();
        btnPlay.classList.add('pause');
        songImg.classList.add('pauseImg');
    } else {
        isPlay = false;
        song.pause();
        btnPlay.classList.remove('pause');
        songImg.classList.remove('pauseImg');
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

const formatTime = (timeSec) => {
    let min, sec;
    min = Math.floor(timeSec / 60);
    sec = Math.floor(timeSec % 60);
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
}

const updateProgressBar = () => {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    curentTimeAudio.innerHTML = formatTime(song.currentTime);
    durationAudio.innerHTML = formatTime(song.duration);
}

const changeProgressBar = () => {
    console.log('val' + progressBar.value);
    song.currentTime = progressBar.value;
}

setInterval(updateProgressBar, 500);

btnPlay.addEventListener('click', playAudio);

song.addEventListener('ended', playNext);

btnNext.addEventListener('click', playNext);
btnPrev.addEventListener('click', playPrev);

progressBar.addEventListener('click', changeProgressBar);


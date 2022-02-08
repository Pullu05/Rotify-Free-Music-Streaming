console.log("Welcome to Rotify");
let songIndex = 1;
let audioElement = new Audio('song/1.mp3');
let masterPlayer = document.getElementById('master-player');
let gif = document.getElementById('gif')
let ProgressBar = document.getElementById('range-bar');
let songItem = Array.from(document.getElementsByClassName('song-item'));
let songinfoname = document.getElementById('songinfoname');
let playbackimg = document.getElementById('playbackimg');


let songs = [
    { songName: "KAMARIA-STREE", filePath: "song/1.mp3", cover: "play-back/1.jpg", time: "" },
    { songName: "SHEILA KI JAWANI", filePath: "song/2.mp3", cover: "play-back/2.jpg", time: "" },
    { songName: "LAT LAG GAYEE-RACE 2", filePath: "song/3.mp3", cover: "play-back/3.jpg", time: "" },
    { songName: "BAAT BAN JAYE-A GENTLEMAN ", filePath: "song/4.mp3", cover: "play-back/4.jpg", time: "" },
    { songName: "GHAGRA(Y.J.H.I)", filePath: "song/5.mp3", cover: "play-back/5.jpg", time: "" },
    { songName: "PSYCHO SAIYAAN-SAAHO", filePath: "song/6.mp3", cover: "play-back/6.jpg", time: "" },
    { songName: "Munni Badnaam Hui Darling", filePath: "song/7.mp3", cover: "play-back/7.jpg", time: "" },
    { songName: "FEVICOL SE-DABANGG 2", filePath: "song/8.mp3", cover: "play-back/8.jpg", time: "" },
    { songName: "CHEEZ BADI-MACHINE", filePath: "song/9.mp3", cover: "play-back/9.jpg", time: "" },
    { songName: "BANDOOK MERI LAILA", filePath: "song/10.mp3", cover: "play-back/10.jpg", time: "" }
];

//song name time srouce set up
songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].cover;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});


//Play-Puase Evnet
masterPlayer.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play()
        masterPlayer.classList.remove('fa-play-circle');
        masterPlayer.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlayer.classList.remove('fa-pause-circle');
        masterPlayer.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// progress Bar time update event
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})
//progress Bar seeking EVent
ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (ProgressBar.value * audioElement.duration) / 100;
})

const allstop = () => {
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused) {
            allstop();
            let songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.currentTime = 0;
            audioElement.src = `song/${songIndex}.mp3`;
            audioElement.play();
            songinfoname.innerHTML=songs[songIndex-1].songName;
            playbackimg.src=songs[songIndex-1].cover;
            masterPlayer.classList.remove('fa-play-circle');
            masterPlayer.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else {
            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            masterPlayer.classList.remove('fa-play-circle');
            masterPlayer.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 1;
    } else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    songinfoname.innerHTML=songs[songIndex-1].songName;
    playbackimg.src=songs[songIndex-1].cover;
    audioElement.play();
    masterPlayer.classList.remove('fa-play-circle');
    masterPlayer.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

document.getElementById('back').addEventListener('click', () => {
    if (songIndex == 1) {
        songIndex = 10;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    songinfoname.innerHTML=songs[songIndex-1].songName;
    playbackimg.src=songs[songIndex-1].cover;
    audioElement.play();
    masterPlayer.classList.remove('fa-play-circle');
    masterPlayer.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})


import { AudioPlayer } from "./AudioPlayer.js";

let media;
const music = new Audio ('./audio/ZITTI E BUONI.mp3')

music.addEventListener('canplaythrough', function() {
    media = new AudioPlayer (music);
    media.duration();
})
music.addEventListener('ended', ()=>{media.ended()})

const timerDuration = document.querySelector('.timer--duration');
const timerCurrent =  document.querySelector('.timer--current');

const timeline = document.querySelector('.audioPlayer__timeline');
timeline.addEventListener('click', ()=>{media.timelineClick()})
const currentTimeline = document.querySelector('.timeline--highlight');

music.addEventListener('timeupdate', ()=>{
    media.current();
    media.timeline();
})

const back = document.querySelector('.button--back');
back.addEventListener('click', ()=>{media.forwardBackward(false)})
const forward = document.querySelector('.button--forward');
forward.addEventListener('click', ()=>{media.forwardBackward(true)})

const buttonPlay = document.querySelector('.button--play');
const buttonPlaySvg = document.querySelector('.button--play__svg')
buttonPlay.addEventListener('click', ()=>{media.play()})

export {timerDuration, timerCurrent, currentTimeline, buttonPlay, timeline, buttonPlaySvg}
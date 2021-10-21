import { AudioPlayer } from "./AudioPlayer.js";


const music = new Audio ('./audio/ZITTI E BUONI.mp3')
let media = new AudioPlayer (music);
music.addEventListener('canplaythrough', function() {
    media.duration();
})
music.addEventListener('ended', ()=>{media.ended()})

const timerDuration = document.querySelector('.timer--duration');
const timerCurrent =  document.querySelector('.timer--current');
music.addEventListener('timeupdate', refreshTimer) 

function refreshTimer(){
    media.current();
    media.timeline();
}
function refreshTimerDrag () {
    media.current();
}


const timeline = document.querySelector('.audioPlayer__timeline');
timeline.addEventListener('click', ()=>{media.timelineClick()})
const currentTimeline = document.querySelector('.timeline--highlight');

const circleCureentTimeline = document.querySelector('.timeline--highlight--circle');
circleCureentTimeline.addEventListener('dragstart', ()=>{
    music.removeEventListener('timeupdate', refreshTimer);
    music.addEventListener('timeupdate', refreshTimerDrag);
});
circleCureentTimeline.addEventListener('drag', () => {media.dragTimeline()});
circleCureentTimeline.addEventListener('dragend', ()=>{
    media.timelineClick()
    music.removeEventListener('timeupdate', refreshTimerDrag);
    music.addEventListener('timeupdate', refreshTimer);
});

const back = document.querySelector('.button--back');
back.addEventListener('click', ()=>{media.forwardBackward(false)})
const forward = document.querySelector('.button--forward');
forward.addEventListener('click', ()=>{media.forwardBackward(true)})

const buttonPlay = document.querySelector('.button--play');
const buttonPlaySvg = document.querySelector('.button--play__svg')
buttonPlay.addEventListener('click', ()=>{media.play()})

export {timerDuration, timerCurrent, currentTimeline, buttonPlay, timeline, buttonPlaySvg}
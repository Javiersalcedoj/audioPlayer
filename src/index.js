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
timeline.addEventListener('click', ()=>{
    let x = event.pageX;
    media.timelineClick(x)
})
const currentTimeline = document.querySelector('.timeline--highlight');

const circleCureentTimeline = document.querySelector('.timeline--highlight--circle');
circleCureentTimeline.addEventListener('dragstart', dragstart)
circleCureentTimeline.removeEventListener('touchstart', dragstart)
function dragstart(){
    music.removeEventListener('timeupdate', refreshTimer);
    music.addEventListener('timeupdate', refreshTimerDrag);
}

circleCureentTimeline.addEventListener('drag', () => {
    let x = event.pageX;
    media.dragTimeline(x)
});
circleCureentTimeline.addEventListener('touchmove', () => {
    const touch = event.targetTouches[0]
    const x = touch.pageX
    media.dragTimeline(x)
});

circleCureentTimeline.addEventListener('dragend', ()=>{
    let x = event.pageX;
    media.timelineClick(x)

    dragend()
})
circleCureentTimeline.addEventListener('touchend', ()=>{
    const x = event.changedTouches[0].pageX;
    media.timelineClick(x)

    dragend()
})
function dragend () {
    music.removeEventListener('timeupdate', refreshTimerDrag);
    music.addEventListener('timeupdate', refreshTimer);
}

const back = document.querySelector('.button--back');
back.addEventListener('click', ()=>{media.forwardBackward(false)})
const forward = document.querySelector('.button--forward');
forward.addEventListener('click', ()=>{media.forwardBackward(true)})

const buttonPlay = document.querySelector('.button--play');
const buttonPlaySvg = document.querySelector('.button--play__svg')
buttonPlay.addEventListener('click', ()=>{media.play()})

export {timerDuration, timerCurrent, currentTimeline, buttonPlay, timeline, buttonPlaySvg}

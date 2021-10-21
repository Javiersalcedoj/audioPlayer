import { buttonPlay, currentTimeline, timeline, timerCurrent, timerDuration } from "./index.js";
import { interpolation } from "./interpolation.js";
import { timerConverter } from "./timerConverter.js";

class AudioPlayer{
    constructor (audio) {
        this.audio = audio;
    }
    play() {
        if (this.audio.paused) {
            this.audio.play();
            buttonPlay.style = 'background-image: url(../img/button--pause.svg)';
        } else {
            this.audio.pause();
            buttonPlay.style = 'background-image: url(../img/button--play.svg)'
        }
    }
    forwardBackward(button) {
        if (button === true) {
            this.audio.currentTime += 15;
        } else {
            this.audio.currentTime -= 15;
        }
    }
    ended() {
        this.audio.pause();
        buttonPlay.style = 'background-image: url(../img/button--play.svg)'
        this.audio.currentTime = 0;
    }
    duration() {
        const duration = timerConverter(this.audio.duration);
        timerDuration.textContent = duration;
    }
    current() {
        const current = timerConverter(this.audio.currentTime)
        timerCurrent.textContent = current;
    }
    timeline() {
        let position = Math.floor ((100*this.audio.currentTime) / this.audio.duration);
        currentTimeline.style = `width: ${position}%;`
    }
    timelineClick () {
        const duration = Math.floor(this.audio.duration)
        let position = Math.floor(interpolation([
            event.pageX,
            timeline.offsetLeft,
            timeline.offsetWidth + timeline.offsetLeft,
            0,
            duration
        ]))
        if (position < 0) {
            position = 0;
        }
        if (position > duration) {
            position = duration
        }
        this.audio.currentTime = position;
    }
}

export{AudioPlayer}
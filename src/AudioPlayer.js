import { buttonPlay, buttonPlaySvg, currentTimeline, timeline, timerCurrent, timerDuration } from "./index.js";
import { interpolation } from "./interpolation.js";
import { timerConverter } from "./timerConverter.js";

class AudioPlayer{
    constructor (audio) {
        this.audio = audio;
    }
    play() {
        if (this.audio.paused) {
            this.audio.play();
            buttonPlaySvg.innerHTML = '<path   <path d="M577,1951.5a92.5,92.5,0,1,0,92.5,92.5A92.5,92.5,0,0,0,577,1951.5Zm-10.5,130h-19v-74h19Zm36-1h-19v-74h19Z" transform="translate(-453 -1919)"/>'
        } else {
            this.audio.pause();
            buttonPlaySvg.innerHTML = '<path  d="M577,1951.5a92.5,92.5,0,1,0,92.5,92.5A92.5,92.5,0,0,0,577,1951.5Zm-19,125.41v-65.82L615,2044Z" transform="translate(-453 -1919)"/>'
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
        buttonPlaySvg.innerHTML = '<path  d="M577,1951.5a92.5,92.5,0,1,0,92.5,92.5A92.5,92.5,0,0,0,577,1951.5Zm-19,125.41v-65.82L615,2044Z" transform="translate(-453 -1919)"/>'
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
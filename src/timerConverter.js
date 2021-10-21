function secondFormat (second) {
    if (second < 10){
        return `0${second}`
    } else {
        return second
    }
}
function timerConverter(timer) {
    let hour;
    let minute;
    let second;
    if(timer < 60) {
        minute = 0;
        second = secondFormat(Math.floor(timer))
        return `${minute}:${second}`
    } else{
        minute = Math.floor(timer/60)
        if (minute < 60){
            second = secondFormat(Math.floor(timer -(minute*60)));
            return `${minute}:${second}`
        } else {
            hour = Math.floor(timer/3600);
            second = secondFormat(Math.floor(timer -(minute*60)));
            minute = Math.floor( minute - (hour*60));
            return `${hour}:${minute}:${second}`
        }
    }
}
export {timerConverter};
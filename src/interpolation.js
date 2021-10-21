function interpolation ([x, x1, x2, y1, y2]) {
    const y = Math.floor(y1 + (((x-x1)/(x2-x1)) * (y2-y1)));
    return y;
}
export {interpolation}
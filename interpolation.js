const interpolation = ({step,start,end,callback,duration} = {}) => {
    let diff = (end - start)/step
    let curr = start
    let i = 0
    const timer = setInterval(() => {
        if (i < step) {
            callback([curr, (duration/step)*(i + 1)])
            curr += diff
            i++
        } 
        else{
            clearInterval(timer)
        }
    }, duration/step)
}
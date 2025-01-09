const throttle = (func, delay) => {
    let last = 0
    return function () {
        const now = +new Date()
        if (now - last > delay) {
            func.apply(this, arguments)
            last = now
        }
    }
}

const opThrottle = (func, delay, { leading = false, trailing = true } = {}) => {
    let last = 0
    let timer = null
    return function () {
        const now = +new Date()
        if (!last && leading === false) {
            last = now
        }
        if (now - last > delay) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            func.apply(this, arguments)
            last = now
        } 
        else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                func.apply(this, arguments)
                last = +new Date()
                timer = null
            }, delay)
        }
    }
}
const debounce = (func, delay) => {
    let debounceTimer
    return function(...args) {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func(...args), delay)
    }
}

function opDebounce(func, delay, options){
    let timer
    options === undefined ? options = { leading: false } : null
    return function (...args) {
        if (!timer && options.leading){
            func(...args)
        }
        clearTimeout(timer)
        timer = setTimeout(() => func(...args), delay)
    }
}


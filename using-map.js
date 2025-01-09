const citiesOnly = (arr) => {
    return arr.map((item) => {
        return item.city
    })
}

const upperCasingStates = (arr) => {
    return arr.map((item) => {
        let words = item.split(" ")
        return words.map((word) => { 
            return word[0].toUpperCase() + word.substring(1); 
        }).join(" ")
    })
}

const fahrenheitToCelsius = (arr) => {
    return arr.map(item => {
        let deg = Number(item.substring(0, item.indexOf("F")-1))
        return Math.floor((deg-32)*5/9) + "°C"
    })
}

const trimTemp = (arr) => {
    return arr.map(item => {
        item.temperature = item.temperature.replace(/\s/g, '')
        return item 
    })
}

const tempForecasts = (arr) => {
    arr = trimTemp(arr)
    return arr.map(item => {
        let c = upperCasingStates([item.city])
        let t = fahrenheitToCelsius([item.temperature]) + "elsius"
        let s = upperCasingStates([item.state])
        return t + " in " + c + ", " + s
    })
}

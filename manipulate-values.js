const mapValues = (obj, func) => {
    let copy = {}
    for(let [key, value] of Object.entries(obj)){
        copy[key] = func(value)
    }
    return copy
}

const filterValues = (obj, func) => {
    let copy = {}
    for(let [key, value] of Object.entries(obj)){
        if(func(value)){
            copy[key] = value
        }
    }
    return copy
}

const reduceValues = (obj, func, acc) => {
    for(let [key, value] of Object.entries(obj)){
        if(acc === undefined) acc = value
        else acc = func(acc, value)
    }
    return acc
}
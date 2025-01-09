const mapKeys = (obj, func) => {
    let copy = {}
    for(let [key, value] of Object.entries(obj)){
        copy[func(key)] = value
    }
    return copy
}

const filterKeys = (obj, func) => {
    let copy = {}
    for(let [key, value] of Object.entries(obj)){
        if(func(key)){
            copy[key] = value
        }
    }
    return copy
}

const reduceKeys = (obj, func, acc) => {
    for(let [key, value] of Object.entries(obj)){
        if(acc === undefined) acc = key
        else acc = func(acc, key)
    }
    return acc
}
const mapEntries = (obj, func) => {
    let copy = {}
    for(let [key, value] of Object.entries(obj)){
        let [nk, nv] = func([key, value])
        copy[nk] = nv
    }
    return copy
}

const filterEntries = (obj, func) => {
    let copy = {}
    for(let [key, value] of Object.entries(obj)){
        if(func([key, value])){
            copy[key] = value
        }
    }
    return copy
}

const reduceEntries = (obj, func, acc) => {
    for(let [key, value] of Object.entries(obj)){
        acc = func(acc, [key, value])
    }
    return acc
}

function totalCalories(cart){
    return parseFloat(reduceEntries(cart, (acc, [k, v]) => acc + nutritionDB[k].calories*v/100, 0).toFixed(1))
}

function lowCarbs(cart){
    return filterEntries(cart, ([k, v]) => nutritionDB[k].carbs*v/100 < 50)
}

function cartTotal(cart){
    return mapEntries(cart, ([k, v]) => [k, mapEntries(nutritionDB[k], ([k1, v1]) => [k1, Math.round((v / 100) * v1 * 1000) / 1000])])
}

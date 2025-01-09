const filter = (arr, func) => {
    let copy = []
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)){
            copy.push(arr[i])
        }
    }
    return copy
}

const reject = (arr, func) => {
    let copy = []
    for(let i = 0; i < arr.length; i++){
        if(!func(arr[i], i, arr)){
            copy.push(arr[i])
        }
    }
    return copy
}

const partition = (arr, func) => {
    let result = []
    result.push(filter(arr, func))
    result.push(reject(arr, func))
    return result
}
const fold = (arr, func, acc) => {
    for(let i = 0; i < arr.length; i++){
        acc = func(acc, arr[i])
    }
    return acc
}
const foldRight = (arr, func, acc) => {
    for(let i = arr.length-1; i >= 0; i--){
        acc = func(acc, arr[i])
    }
    return acc
}
const reduce = (arr, func) => {
    let acc = arr[0]
    for(let i = 1; i < arr.length; i++){
        acc = func(acc, arr[i])
    }
    return acc
}
const reduceRight = (arr, func) => {
    let acc = arr[arr.length-1]
    for(let i = arr.length-2; i >= 0; i--){
        acc = func(acc, arr[i])
    }
    return acc
}
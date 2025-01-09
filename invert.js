function invert(obj){
    let newObj =  Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [value, key])
    )
    return newObj
}
const split = (str, pattern) => {
    if(pattern === undefined) {
        pattern = ","
    }
    let result = []
    if(pattern === ""){
        for(let i = 0; i < str.length; i++){
            result.push(str[i])
        }
        return result
    }
    let end = str.indexOf(pattern)
    while (end > -1){
        end = str.indexOf(pattern)
        if (end === -1) {
            break
        }
        result.push(str.slice(0, end))
        str = str.slice(end + pattern.length)
    }
    result.push(str)
    return result
}
const join = (arr, pattern) => {
    if(pattern === undefined){
        pattern = ","
    }
    let str = ""
    for(let i = 0; i < arr.length; i++){
        if(i == arr.length-1){
            str += arr[i].toString()
            break
        }
        str += arr[i].toString()+pattern
    }
    return str
}

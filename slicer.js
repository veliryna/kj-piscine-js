function slice(arr, start, end){
    let t = typeof arr
    if(end === undefined){
        end = arr.length
    }
    if(start < 0){
        start = arr.length+start
    }
    if(end < 0){
        end = arr.length+end
    }
    let res = []
    for(let i = start; i < end; i++){
        res.push(arr[i])
    }
    return (t == "object") ? res : res.join("")
}

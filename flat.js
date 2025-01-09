function flat(arr, depth){
    if(depth == undefined){
        depth = 1
    }
    if(depth == 1) {
        return flattenArr(arr)
    }
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flat(arr[i], depth - 1))
        } 
        else{
            res.push(arr[i])
        }
    }
    return res
}
  
function flattenArr(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(arr[i])
        } 
        else{
            res.push(arr[i])
        }
    }
    return res
}

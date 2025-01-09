function chunk(arr, size){
    let bigarr = []
    for(let i = 0; i < arr.length; i += size){
        let subarr = []
        for(let j = i; j < i+size; j++){
            if(arr[j] == undefined){
                break
            }
            subarr.push(arr[j])
        }
        bigarr.push(subarr)
    }
    return bigarr
}

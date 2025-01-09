function reverse(data){
    let t = false
    if(typeof data == "string"){
        data = data.split("")
        t = true
    }
    for(let i = 0; i < data.length / 2; i++){
        [data[i], data[data.length - i - 1]] = [data[data.length - i - 1], data[i]]
    }
    return (t) ? data.join("") : data
}
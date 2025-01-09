function ionOut(str){
    let words = str.replace(/[^\w\s]/gi, "").split(" ")
    let result = []
    let regex = /tion$/
    for(let i = 0; i < words.length; i++){
        if(regex.test(words[i])){
            result.push(words[i].slice(0, -3))
        }
    }
    return result
}
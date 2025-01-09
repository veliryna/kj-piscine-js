const pyramid = (str, num) => {
    let res = ""
    let spaces = (num-1)*str.length
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= spaces; j++){
            res += " "
        }
        for(let j = 1; j <= 2*i-1; j++){
            res += str
        }
        if(i != num){
            res += "\n"
        }
        spaces = spaces-str.length
    }
    return res
}

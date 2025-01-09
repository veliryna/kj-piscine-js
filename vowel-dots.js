const vowels = /[aeiouAEIOU]/
function vowelDots(str){
    let arr = str.split("")
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(vowels.test(arr[i])){
            result.push(arr[i])
            result.push(".")
        }
        else{
            result.push(arr[i])
        }
    }
    return result.join("")
}

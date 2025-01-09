function pronoun(str){
    let result = {}
    let prons = {"i" : 0, "you" : 0, "he":0, "she":0, "it":0, "they":0, "we":0}
    str = str.toLowerCase()
    str = str.replace(/(\r\n|\n|\r)/gm, "")
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ")
    let arr = str.replace(/\s{2,}/g, " ").split(" ")
    for(let i = 0; i < arr.length; i++){
        if(Object.keys(prons).includes(arr[i])){
            if(prons[arr[i]] === 0){
                result[arr[i]] = {}
                result[arr[i]].word = []
            }
            prons[arr[i]]++
            if(!Object.keys(prons).includes(arr[i+1]) && arr[i+1] !== undefined){
                result[arr[i]].word.push(arr[i+1])
            }
        }
    }
    for(let [key, value] of Object.entries(prons)){
        if(value > 0){
            result[key].count = value
        }
    }
    return result
}

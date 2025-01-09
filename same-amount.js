function sameAmount(str, regex1, regex2){
    regex1 = new RegExp(regex1, "g");
    regex2 = new RegExp(regex2, "g");
    let result1 = str.match(regex1)
    let result2 = str.match(regex2)
    if(result1 === null) result1 = []
    if(result2 === null) result2 = []
    return result1.length === result2.length
}

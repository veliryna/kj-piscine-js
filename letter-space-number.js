function letterSpaceNumber(str){
    let regex = /[a-zA-Z]\s\d(\W|$)/g
    let result = str.match(regex)
    if(result === null) result = []
    result.forEach((element, index) => {
        if(result[index].length > 3){
            result[index] = result[index].slice(0, -1)
        }
    });
    return result
}

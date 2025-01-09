function groupPrice(str){
    let regex = /(?:USD|\$)(\d+.\d+)/g
    let matches = str.match(regex)
    if (matches === null) return []
    let result = []
    for(let i = 0; i < matches.length; i++){
        let elem = []
        elem.push(matches[i])
        if(matches[i].startsWith('USD')){
            matches[i] = matches[i].slice(3)
        } 
        else{
            matches[i] = matches[i].slice(1)
        }
        let nums = matches[i].split(".")
        elem.push(nums[0])
        elem.push(nums[1])
        result.push(elem)
    }
    return result
}

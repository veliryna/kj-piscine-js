function findIP(str){
    let regex = /([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)((:[0-9]+)?)/g
    let m = str.match(regex)
    let result = []
    for(let i = 0; i < m.length; i++){
        let nums = m[i].split(".")
        let isGood = true
        for(let j = 0; j < 4; j++){
            if(j === 3){
                let isPort = nums[j].split(":")
                if(isPort.length === 1){
                    if(Number(isPort[0]) > 255) isGood = false
                    else if(isPort[0].length > 1 && isPort[0].startsWith("0")) isGood = false
                }
                else{
                    if(Number(isPort[1]) > 65535) isGood = false
                    else if(Number(isPort[0]) > 255) isGood = false
                    else if(isPort[0].length > 1 && isPort[0].startsWith("0")) isGood = false
                }
            }
            else{
                if(Number(nums[j]) > 255) isGood = false
                else if(nums[j].length > 1 && nums[j].startsWith("0")) isGood = false
            }
        }
        if(isGood){
            result.push(m[i])
        }
    }
    return result
}
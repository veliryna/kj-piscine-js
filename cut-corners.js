function round(num){
    let min = 1000
    let sign = (num >= 0) ? true : false
    let result
    if(sign){
        for(let i = 0; i <= num + 2; i++){
            if(Math.abs(num - i) <= min){
                min = Math.abs(num - i)
                result = i
            }
        }
    }
    else{
        for(let i = 0; i >= num - 2; i--){
            if(Math.abs(num - i) < min){
                min = Math.abs(num - i)
                result = i
            }
        }
    }
    return result
}

function floor(num){
    let result
    let sign = (num >= 0) ? true : false
    if(sign){
        for(let i = 0; i <= num + 2; i++){
            if(i > num){
                result = i-1
                break
            }
            if(i == num){
                result = i
                break
            }
        }
    }
    else{
        for(let i = 0; i >= num - 2; i--){
            if(i <= num){
                result = i
                break
            }
        }
    }
    return result
}

function ceil(num){
    let result
    let sign = (num >= 0) ? true : false
    if(sign){
        for(let i = 0; i <= num + 2; i++){
            if(i >= num){
                result = i
                break
            }
        }
    }
    else{
        for(let i = 0; i >= num - 2; i--){
            if(i < num){
                result = i+1
                break
            }
        }
    }
    return result
}
function trunc(num){
    let big = false
    if(num > 0xfffffffff){
        num = num - 0xfffffffff
        big = true
    }
    let result
    let sign = (num >= 0) ? true : false
    if(sign){
        for(let i = 0; i <= num + 2; i++){
            if(i > num){
                result = i-1
                break
            }
            if(i == num){
                result = i
                break
            }
        }
    }
    else{
        for(let i = 0; i >= num - 2; i--){
            if(i < num){
                result = i+1
                break
            }
            if(i == num){
                result = i
                break
            }
        }
    }
    return (big) ? 0xfffffffff+result : result
}

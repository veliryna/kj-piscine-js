function multiply(a, b){
    let sign1 = (a >= 0) ? true : false
    let sign2 = (b >= 0) ? true : false
    let res = 0
    a = Math.abs(a)
    b = Math.abs(b)
    for(let i = 1; i <= b; i++){
        res += a
    }
    if(res == 0) return 0
    else return (sign1 == sign2) ? res : -res
}
function divide(a, b){
    let sign1 = (a >= 0) ? true : false
    let sign2 = (b >= 0) ? true : false
    let count = 0
    a = Math.abs(a)
    b = Math.abs(b)
    while(true){
        a = a - b
        if(a < 0){
            break
        }
        if(a == 0){
            count++
            break
        }
        count++
    }
    if(count == 0) return 0
    else return (sign1 == sign2) ? count : -count
}
function modulo(a, b){
    let sign1 = (a >= 0) ? true : false
    a = Math.abs(a)
    b = Math.abs(b)
    if(a < b){
        return a
    }
    while(true){
        a = a - b
        if(a == 0 || a < b){
            break
        }
    }
    return (sign1 == true) ? a : -a
}

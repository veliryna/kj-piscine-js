const add4 = '+4'
const mul2 = '*2'

function findExpression(num){
    let res = "1 "
    let arr = []
    while(true){
        if(num - 4 == 1){
            arr.push(add4)
            break
        }
        else if(num - 4 == 0){
            arr.push(mul2)
            arr.push(mul2)
            break
        }
        else if(num - 4 == 2){
            arr.push(add4)
            arr.push(mul2)
            break
        }
        else if(num - 4 == 3){
            return undefined
        }
        else{
            num = num - 4
            arr.push(add4)
        }
    }
    return res + arr.reverse().join(" ")
}

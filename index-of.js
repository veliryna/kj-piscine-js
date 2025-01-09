function indexOf(arr, value, optional){
    if(optional === undefined){
        optional = 0
    }
    let index = -1
    for(let i = optional; i < arr.length; i++){
        if(arr[i] == value){
            index = i
            break
        }
    }
    return index
}
function lastIndexOf(arr, value, optional){
    if(optional === undefined){
        optional = arr.length-1
    }
    let index = -1
    for(let i = optional; i >= 0; i--){
        if(arr[i] == value){
            index = i
            break
        }
        if(i == 0 && optional != arr.length-1){
            for(let j = arr.length-1; j > optional; j--){
                if(arr[j] == value){
                    index = j
                    break
                }
            }
        }
    }
    return index
}
function includes(arr, value){
    for(let i = 0; i < arr.length; i++){
       if(arr[i] == value){
            return true
       }
    }
    return false
}

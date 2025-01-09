function fusion(obj1, obj2){
    let result = {}
    let iter = Object.keys(obj1).length >= Object.keys(obj2).length ? obj1 : obj2
    for(let key in iter){
        if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)){
            if(!isNaN(obj1[key]) && !isNaN(obj2[key])){
                result[key] = obj1[key] + obj2[key] 
            }
            else if(typeof obj1[key] === 'string' && typeof obj2[key] === 'string'){
                result[key] = obj1[key] + " " + obj2[key]
            }
            else if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
                result[key] = obj1[key].concat(obj2[key])
            }
            else if(isObject(obj1[key]) && isObject(obj2[key])){
                result[key] = fusion(obj1[key], obj2[key])
            }
            else{
                result[key] = obj2[key]
            }
        }
        else if(obj1.hasOwnProperty(key)){
            result[key] = obj1[key]
        }
        else if(obj2.hasOwnProperty(key)){
            result[key] = obj2[key]
        }
    }
    return result
}

function isObject(objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
}

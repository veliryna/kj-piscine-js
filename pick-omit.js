function pick(obj, str){
    let keys = Object.keys(obj)
    let filtered = keys.filter((key) => {
        if(typeof str === 'string'){
            return key === str
        }
        if(str instanceof Array){
            return str.includes(key)
        }
    })
    let newObj = {}
    for(let key of filtered){
        newObj[key] = obj[key]
    }
    return newObj
}

function omit(obj, str){
    let keys = Object.keys(obj)
    let filtered = keys.filter((key) => {
        if(typeof str === 'string'){
            return key !== str
        }
        if(str instanceof Array){
            return !str.includes(key)
        }
    })
    let newObj = {}
    for(let key of filtered){
        newObj[key] = obj[key]
    }
    return newObj
}


let tools = { drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' }
console.log(omit(tools, ['grinders', 'saws']))
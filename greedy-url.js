function getURL(dataSet){
    let arr = dataSet.split(/(\s|\n)/)
    let regex = /http(s?):\/\/.+/
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(regex.test(arr[i])){
            if(!arr[i].startsWith('http')){
                result.push(arr[i].substring(arr[i].indexOf('h')))
            }
            else{
                result.push(arr[i])
            }
        }
    }
    return result
}

function getMap(urls){
    let map = new Map()
    for(let i = 0; i < urls.length; i++){
        map.set(urls[i], (urls[i].match(/=/g) === null) ? 0 : urls[i].match(/=/g).length)
    }
    return map
}

function greedyQuery(dataSet){
    let urls = getURL(dataSet)
    let map = getMap(urls)
    let result = []
    for (let [key, value] of map) {
        if(value >= 3){
            result.push(key)
        }
    }
    return result
}

function notSoGreedy(dataSet){
    let urls = getURL(dataSet)
    let map = getMap(urls)
    let result = []
    for (let [key, value] of map) {
        if(value == 2 || value == 3){
            result.push(key)
        }
    }
    return result
}

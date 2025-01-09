const all = async(obj) => {
    let result = {}
    if(Object.keys(obj).length === 0) return {}
    for (let key in obj) {
        result[key] = await obj[key]
    }
    return result
}
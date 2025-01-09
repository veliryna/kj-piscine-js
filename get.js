function get(src, path){
    let value = path.split(".").reduce((obj, key) => {
        if (obj === undefined) {
            return undefined
        }
        return obj[key]
    }, src)
    return value
}
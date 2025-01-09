function replica(target, ...args){
    args.forEach((arg) => {
        Object.keys(arg).forEach((key) => {
            if (isObject(arg[key])) {
                if (!target.hasOwnProperty(key) || !isObject(target[key])) {
                    target[key] = {}
                }
                replica(target[key], arg[key])
            } else {
                target[key] = arg[key]
            }
        })
    })
    return target
}

function isObject(objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
}

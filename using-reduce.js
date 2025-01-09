const adder = (arr, optional) => {
    if(arr === []) return 0
    if(optional === undefined) optional = 0
    return arr.reduce((acc, cur) => {
        return acc + cur
    }, optional)
}

const sumOrMul = (arr, optional) => {
    if(optional === undefined) optional = 0
    return arr.reduce((acc, cur) => {
        if(cur % 2 === 0) return acc*cur
        else return acc+cur
    }, optional)
}

const funcExec = (arr, optional) => {
    return arr.reduce((acc, cur) => {
        return cur(acc)
    }, optional)
}

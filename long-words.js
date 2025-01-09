const longWords = (arr) => {
    return arr.every(item => {
        return typeof item === 'string' && item.length >= 5
    })
}

const oneLongWord = (arr) => {
    return arr.some(item => {
        return typeof item === 'string' && item.length >= 10
    })
}

const noLongWords = (arr) => {
    return  !arr.some(item => {
        return typeof item === 'string' && item.length >= 7
    })
}
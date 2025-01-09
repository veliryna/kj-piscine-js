const escapeStr = "'`/\"\\"
const arr = [4, '2']
const obj = {
    str: "ira",
    num: 10,
    bool: false,
    undef: undefined
}
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "xyz",
        num: 42,
        bool: true
    }
}

Object.freeze(arr)
Object.freeze(obj)

const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) deepFreeze(obj[prop])
  })
  return Object.freeze(obj)
}
deepFreeze(nested)
const arrToSet = (arr) => {return new Set(arr)}
const arrToStr = (arr) => {return arr.join("")}
const setToArr = (set) => {return Array.from(set)}
const setToStr = (set) => {return Array.from(set).join("")}
const strToArr = (str) => {return Array.from(str)}
const strToSet = (str) => {return new Set(Array.from(str))}
const mapToObj = (map) => {return Object.fromEntries(map)}
const objToArr = (obj) => {return Object.values(obj)}
const objToMap = (obj) => {return new Map(Object.entries(obj))}
const arrToObj = (arr) => {return Object.assign({}, arr)}
const strToObj = (str) => {return Object.assign({}, Array.from(str))}

const superTypeOf = (data) => {
    if(data instanceof Map) return "Map"
    if(data instanceof Set) return "Set"
    if(data instanceof Array) return "Array"
    if(data === null) return "null"
    if(data === undefined) return "undefined"
    else{
        let t = typeof(data)
        return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()
    }    
}
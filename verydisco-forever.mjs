import { argv } from 'node:process'
import * as fs from 'fs'

let result = ""
let arr = argv[2].split(" ")
if(arr instanceof Array){
    let turned = arr.map((value) => {
        let part1 = value.substring(0, Math.ceil(value.length/2))
        let part2 = value.substring(Math.ceil(value.length/2))
        return part2 + "" + part1
    })
    result = turned.join(" ")
}
else if(typeof arr === 'string'){
    let part1 = value.substring(0, Math.ceil(value.length/2))
    let part2 = value.substring(Math.ceil(value.length/2))
    result = part2 + "" + part1
}

fs.writeFile("verydisco-forever.txt", result, (err) => {
    if(err) {
        return console.log(err)
    }
}) 
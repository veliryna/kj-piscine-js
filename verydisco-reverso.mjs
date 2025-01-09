import { argv } from 'node:process'
import * as fs from 'fs'

let filepath = argv[2]

fs.readFile(filepath, {encoding: 'utf-8'}, (err, data) => {
    if (!err) {
        let arr = data.split(" ")
        if(arr instanceof Array){
            let turned = arr.map((value) => {
                let part1 = value.substring(0, Math.floor(value.length/2))
                let part2 = value.substring(Math.floor(value.length/2))
                return part2 + "" + part1
            })
            console.log(turned.join(" "))
        }
        else if(typeof arr === 'string'){
            let part1 = value.substring(0, Math.floor(value.length/2))
            let part2 = value.substring(Math.floor(value.length/2))
            console.log(part2 + "" + part1)
        }
    } else {
        console.log(err)
    }
})


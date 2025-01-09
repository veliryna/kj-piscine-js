import { argv } from 'node:process'

let arr = argv[2].split(" ")
if(arr instanceof Array){
    let turned = arr.map((value) => {
        let part1 = value.substring(0, Math.ceil(value.length/2))
        let part2 = value.substring(Math.ceil(value.length/2))
        return part2 + "" + part1
    })
    console.log(turned.join(" "))
}
else if(typeof arr === 'string'){
    let part1 = value.substring(0, Math.ceil(value.length/2))
    let part2 = value.substring(Math.ceil(value.length/2))
    console.log(part2 + "" + part1)
}
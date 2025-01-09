import { argv } from 'node:process'
import * as fs from 'fs'
import { Buffer } from 'node:buffer'


let file = argv[2]
let option = argv[3]
let newname = argv[4]

let data = fs.readFileSync(file, {encoding: 'utf-8'})
let buf
if(option === "encode"){
    buf = Buffer.from(data, 'utf-8').toString('base64')
    let name = (newname === undefined) ? "cypher.txt" : newname
    fs.writeFileSync(name, buf) 
}
else if(option === "decode"){
    buf = Buffer.from(data, 'base64').toString('utf-8')
    let name = (newname === undefined) ? "clear.txt" : newname
    fs.writeFileSync(name, buf)
}


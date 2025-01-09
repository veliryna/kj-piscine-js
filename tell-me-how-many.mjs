import { argv } from 'node:process'
import * as fs from 'fs'

let dirpath = argv[2]
if(dirpath !== undefined){
    fs.readdir(dirpath, (err, files) => {
        if (err)
            console.log(err)
        else {
            console.log(files.length)
        }
    })
}
else{
    fs.readdir(__dirname, (err, files) => {
        if (err)
            console.log(err)
        else {
            console.log(files.length)
        }
    })
}
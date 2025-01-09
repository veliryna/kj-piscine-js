import { argv } from 'node:process'
import * as fs from 'fs'

let dirpath = argv[2]
fs.readdir(dirpath, (err, files) => {
    if (err)
        console.log(err)
    else {
        let guests = files.map((file) => {
            return [file.split(".")[0].split("_")[1], file.split(".")[0].split("_")[0]]
        })
        guests.sort()
        let i = 1
        guests.forEach((guest) => {
            console.log(i + ". " + guest.join(" "))
            i++
        })
    }
})

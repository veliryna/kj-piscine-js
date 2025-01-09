import { argv } from 'node:process'
import * as fs from 'fs'
import * as path from 'path'

let dirpath = argv[2]
fs.writeFileSync("vip.txt", '', {
    encoding: "utf8",
    flag: "a+",
    mode: 0o666
}) 
fs.readdir(dirpath, (err, files) => {
    if (err)
        console.log(err)
    else {
        let filtered = files.filter((file) => {
            let data = fs.readFileSync(path.join(dirpath, file), {encoding: 'utf-8'})
            const info = JSON.parse(data)
            return info["answer"] === "yes"
        })

        let guests = filtered.map((file) => {
            return [file.split(".")[0].split("_")[1], file.split(".")[0].split("_")[0]]
        })
        guests.sort()
        let i = 1
        guests.forEach((guest) => {
            let result = i + ". " + guest.join(" ")
            if(i < guests.length){
                result += "\n"
            }
            fs.writeFileSync("vip.txt", result, {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            }) 
            i++
        })
    }
})

import * as http from 'http'
import * as fs from 'fs/promises'
import { Buffer } from 'node:buffer'

const approved = [
    'Caleb_Squires:abracadabra',
    'Tyrique_Dalton:abracadabra',
    'Rahima_Young:abracadabra'
]

const responce = (res, status, message) => {
    res.writeHead(status, { 'Content-Type': 'application/json' })
    res.end(message)
}

const requestHandle = async(req, res) => {
    const encodedData = req.headers.authorization?.split(' ')[1]
    const authTry = Buffer.from(encodedData || '', 'base64').toString('ascii')
    if(req.method === 'POST' && approved.includes(authTry)){
      let body = ''
      req.on('data', chunk => body += chunk.toString())
      req.on('end', async() => {
        try{
          await fs.writeFile(`./guests/${req.url.slice(1)}.json`, body);
          responce(res, 200, req.headers.body)
        } 
        catch{
          responce(res, 500, JSON.stringify({ error: 'server failed' }))
        }
      })
    } 
    else{
      responce(res, 401, 'Authorization Required%')
    }
}

http.createServer(requestHandle).listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
})
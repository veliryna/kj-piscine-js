import http from 'http'
import * as fs from 'fs/promises'

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST') {
    let body = ''
    req.on('data', chunk => {
      body += chunk.toString()
    })
    req.on('end', async () => {
      try{
        const filename = req.url.slice(1) + '.json'
        await fs.writeFile(`./guests/${filename}`, body)
        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(body)
      } 
      catch{
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'server failed' }))
      }
    })
  }
})
server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})

import http from 'http'
import * as fs from 'fs'

const host = 'localhost'
const port = 5000

const requestListener = function(req, res) {
    if(req.method === 'GET'){
        const guestId = req.url.split('/')[1]
        fs.readFile(`guests/${guestId}.json`, 'utf8', (err, data) => {
          if (err) {
            if (err.code === 'ENOENT') {
              res.writeHead(404, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: 'guest not found' }))
            } else {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: 'server failed' }))
            }
          } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(data)
          }
        })
    }
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})
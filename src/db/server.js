const promana = require('./progress-manage')
const http = require('http')
const server = http.createServer()

const port = 8888
const host = '127.0.0.1'

server.on('request',function(req,res){
    console.log("hallo world")
})
server.listen(port,host)

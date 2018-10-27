const promana = require('./progress-manage')
const http = require('http')
const server = http.createServer()

const port = 8888
var pre_label = ""

server.on('request',function(req,res){
    var next_label
    next_label = promana.returnLabel(1,1,1)
    if(pre_label === next_label){
        // do nothing
    }else{
        // send label
        pre_label = next_label
    }
})

server.listen(port)
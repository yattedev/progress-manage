const promana = require('./progress-manage')
const express = require('express')
const app = express()

const port = 8888
var pre_label = ""

app.listen(port)
console.log('Server is started')

app.post('/returnlabel',function(req, res){
    var next_label
    var player = req.get('Player')
    var buttom = "bt1"
    var label  = "lab1"
    next_label = promana.returnLabel(1,1,1)
    if(pre_label === next_label){
        // do nothing
    }else{
        // send label
        pre_label = next_label
    }
})


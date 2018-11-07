const promana = require('./progress-manage')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

var pre_label = ""

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.listen(8888)

app.post('/returnlabel',function(req, res){
    var next_label
    var player = req.get('Player')
    var buttom = req.body.buttom
    var label  = req.body.label
    next_label = promana.returnLabel(player,buttom,label)
    if(pre_label === next_label){
        // do nothing
        res.end()
    }else{
        // send label
        res.status(200).send(next_label)
        pre_label = next_label
    }
})


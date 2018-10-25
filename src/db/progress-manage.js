const redis_crud = require('./redis-crud')

exports.returnLabel = function(player,pressedButton,ps){
    label = "*PL" + player + "_Btn" + pressedButton + "_" + ps
    return label
}

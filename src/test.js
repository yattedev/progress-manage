const redis = require('redis').createClient();

var key = 'test:hoge';
var value = 'hoge';

redis.set(key,value,function(){});

redis.get(key,function(err,val){
    if(err) return console.log(err);
    console.log(val);
});
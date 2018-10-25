const REDIS_KEY = 'test:hoge';
const REDIS_VALUE = 'hoge';
const REDIS_UPDATE_VALUE = 'fuga';
const client= require('../db')
const delay = time =>(
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },time)
    })
)

describe('redis CRUD Driver test',()=>{
    it('completed redis Create and Read',async()=>{
        client.insert(REDIS_KEY,REDIS_VALUE)
        const val = await client.getValueByKey(REDIS_KEY)
        expect(val).toBe(REDIS_VALUE); 
    }) 
    it('completed redis Update',async()=>{
        client.insert(REDIS_KEY,REDIS_UPDATE_VALUE)
        const val = await client.getValueByKey(REDIS_KEY)
        expect(val).toBe(REDIS_UPDATE_VALUE); 
    }) 
    it('completed redis Delete',async()=>{
        client.deleteItem(REDIS_KEY)
        const val = await client.getValueByKey(REDIS_KEY)
        expect(val).toBeNull();
    }) 
})

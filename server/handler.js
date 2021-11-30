const fs = require("fs");
const cart = require('./cart')

const actions ={
    add: cart.add,
    change: cart.change,
    del: cart.del
}

const handler = (req, res, file, action) =>{
    fs.readFile(file, "utf-8", (err,data)=>{
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text:err}))
        } else{
            let newData = actions[action](JSON.parse(data), req)
            fs.writeFile(file, newData, (err)=>{
                if(err){
                    res.sendStatus(404, JSON.stringify({result:0}))
                } else{
                    res.send(JSON.stringify({result:1}))
                }
            })
        }
    })
}

module.exports = handler;
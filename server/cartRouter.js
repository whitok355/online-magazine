const express = require('express')
const router = express.Router()
const fs = require('fs')
const handler = require('./handler')

router.get('/', (req, res) => {
    fs.readFile('./data-base/cart.json', "utf-8", (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
        } else {
            res.send(data)
        }
    })
})

router.post('/', (req, res) => {
    handler(req, res, "./data-base/cart.json", "add")
})
router.put('/:id',(req, res)=>{
    handler(req,res, './data-base/cart.json', "change")
})
router.delete('/:id', (req, res) => {
    handler(req, res, './data-base/cart.json', "del")   
})

module.exports = router;
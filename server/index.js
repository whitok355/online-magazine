const express = require('express')
const fs = require('fs')
const app = express();
const cartRouter = require('./cartRouter')

app.use(express.json())
app.use('/', express.static('../dist'))
app.use('/api/cart', cartRouter)

app.get('/api/catalog', (req, res) => {
    fs.readFile("./data-base/list.json", 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
        } else {
            res.send(data)
        }
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`The server listen port ${port}....`))

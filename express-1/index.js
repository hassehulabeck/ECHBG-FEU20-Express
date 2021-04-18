const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req)
    res.json(req.url)
})

app.listen(3000, () => {
    console.log('Lyssnar på 3000')
})
const express = require('express')
const app = express()

const port = 3000;

const products = [
    {
        name: 'Gräsklippare',
        price: 300
    },
    {
        name: 'Hammare',
        color: 'red'
    }
]


app.get('/', (req, res) => {
    res.send("Hej")
})
app.get('/user', (req, res) => {
    res.status(403).send('Not authorized')
})
app.get('/product', (req, res) => {
    res.json(products[0])
})
app.get('*', (req, res) => {
    res.send(` ${req.url} not found`)
})

app.listen(port, () => {
    console.log(`lyssnar på port ${port}`)
})
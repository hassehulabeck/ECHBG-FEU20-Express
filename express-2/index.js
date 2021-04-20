const express = require('express')
const app = express()

const userRouter = require('./userRouter')
const productRouter = require('./productRouter')

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

app.get('*', (req, res) => {
    res.status(404).sendFile('404.html', {root: __dirname + '/public'})
})

app.listen(port, () => {
    console.log(`lyssnar på port ${port}`)
})
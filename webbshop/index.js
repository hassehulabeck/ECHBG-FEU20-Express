const express = require('express')
const app = express()
const port = 3000

const productRouter = require('./productRouter')

app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'))
app.use('/products', productRouter)

app.get('/', (req, res) => {
    res.sendFile('index.html')
})


app.listen(port, () => {
    console.log(`Webbshoppen är nu öppen på port ${port}`)
})
const express = require('express')
const app = express()

const userRouter = require('./userRouter')
const productRouter = require('./productRouter')

const port = 3000;

app.use(express.urlencoded())

// Externa route-filer som vi använder
app.use('/users', userRouter)
app.use('/products', productRouter)

app.get('/', (req, res) => {
    res.send("Hej")
})

app.get('*', (req, res) => {
    res.status(404).sendFile('404.html', {root: __dirname + '/public'})
})

app.listen(port, () => {
    console.log(`lyssnar på port ${port}`)
})
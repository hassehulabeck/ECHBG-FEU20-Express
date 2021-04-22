const express = require('express')
const app = express()
const port = 3000

const productRouter = require('./productRouter')

// I äldre filer ser ni oftast body-parser isf .urlencoded
app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'))
app.use('/products', productRouter)

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(port, () => {
    console.log(`Webbshoppen är nu öppen på port ${port}`)
})
const express = require('express')
const app = express()
const fs = require('fs')

let wrong = false

app.use('/', function (req, res, next) {

    fs.readFile('./text.txt',(err, data) => {
        if (err) {
            console.log("Fel")
            next(err)
        }
        console.log(data)
    })

    next()
})

app.use('/hej', (req, res, next) => {
    // Här simulerar jag att det blir något fel
    wrong = true

    // Här kontrollerar jag om wrong är true
    if (wrong) {
        throw new Error('fileError')
    }    
    
    console.log(new Date().toISOString())
    next()
})

// Error-hantering
app.use((err, req, res, next) => {
    console.error(err)
    res.send(`Det blev fel: ${err.message}`)
})

app.get('/', (req, res) => {
    res.json("Hallå")
})

app.get('/hej', (req, res) => {
    res.json("Hej")
})

app.listen(3000, () => {
    console.log('Lyssnar på 3000')
})
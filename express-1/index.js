const express = require('express')
const app = express()
const fs = require('fs')


// Middleware för de två path som vi har.
app.use('/file', function (req, res, next) {
    fs.readFile('./text.txt',(err, data) => {
        if (err) 
            next(err)
        else
            res.json(data)
            // Lite märkligt att next inte behövs för "avslut".
    })
})

app.use('/', (req, res, next) => {
    // Här kan vi exempelvis kontrollera om ett värde är mindre än ett annat. 
    // alltså vanlig synkron kod
    throw new Error('fel vid root-request')
    next()
})

// Error-hantering
app.use((err, req, res, next) => {
    console.error(err)
    res.send(`Det blev fel: ${err}`)
})

// Så länge som det inte blir fel körs de här.
app.get('/', (req, res) => {
    res.json("Hallå")
})

app.get('/file', (req, res) => {
    res.json("Hej")
})

app.listen(3000, () => {
    console.log('Lyssnar på 3000')
})
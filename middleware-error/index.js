const express = require('express')
const app = express()
const fs = require('fs')
let simulatedError = false

// Middleware för de två path som vi har.
app.use('/www', (req, res, next) => {
    // Här kan vi exempelvis kontrollera om ett värde är mindre än ett annat. 
    // alltså vanlig synkron kod
    simulatedError = true

    if (simulatedError)     
        throw new Error('fel vid root-request')
    else {
        res.myMessage = 'Hejsan'
        next()
    }
})

app.use('/text', function (req, res, next) {
    fs.readFile('./text.txt',(err, data) => {
        if (err) 
            next(err)
        else
            res.myMessage = data
            // Lite märkligt att next inte behövs för "avslut" här.
    })
})

// Error-hantering
app.use((err, req, res, next) => {
    console.error(err)
    res.send(`Det blev fel: ${err}`)
})

// Så länge som det inte blir fel körs de här.
app.get('/www', (req, res) => {
    res.send(res.myMessage)
})

app.get('/text', (req, res) => {
    res.json(res.myMessage)
})

app.listen(3000, () => {
    console.log('Lyssnar på 3000')
})
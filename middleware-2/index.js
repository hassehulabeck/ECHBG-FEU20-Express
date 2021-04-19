const express = require('express')
const app = express()

const numbers = [3,494,199, 1]
const port = 3000


app.get('/', (req, res) => {
    res.send("Hej")
})

app.get('/:number', (req, res) => {
    let number = numbers.filter(num => {
        return num == req.params.number
    })
    if (number.length == 0) {
        throw new Error('nonumber')
    }
    res.json(number)

})

app.use(function(err, req, res, next) {
    if (err.message == 'nonumber') {
        res.status(500).send("Oh no, no such number, no talk, me angy, all wrong.")
    }
    next()
})

app.listen(port, () => {
    console.log(`Har nu lyssning på port ${port}`)
})
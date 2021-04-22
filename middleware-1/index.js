const express = require('express')
const app = express()

const port = 3000

let requestTime = function(req, res, next) {
    res.requeTime = Date.now()
    next()
}

app.use('/ho', requestTime)

app.get('/', (req, res) => {
    res.send(`Hallå.`)
})
app.get('/ho', (req, res) => {
    res.send(`Hallå, det har passerat ${res.requeTime} millisekunder sedan 1 januari 1970.`)
})


app.listen(port, () => {
    console.log(`Lyssnar nu på port ${port}`)
})
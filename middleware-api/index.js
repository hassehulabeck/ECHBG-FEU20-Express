const express = require('express')
const axios = require('axios')
const app = express()

const port = 3000
const url = 'https://official-joke-api.appspot.com/random_joke'

app.use( async(req, res, next) => {

    await axios.get(url)
        .then((res) => {
            res.joke = res
        })
        .error((err) => {
            console.error(err)
        })
        .finally(() => {
            next()
        })
})


app.get('/', (req, res) => {
    res.json(res.joke)
})

app.listen(port, () => {
    console.log(`Jag lyssnar alltid på ${port}`)
})
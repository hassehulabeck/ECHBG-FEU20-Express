const express = require('express')
const axios = require('axios')
const app = express()

const port = 3000
const url = 'https://official-joke-api.appspot.com/random_joke'

app.use( async(request, response, next) => {

    await axios.get(url)
        .then((res) => {
            response.joke = res.data
        })
        .catch((err) => {
            console.error(err)
            next(err)
        })
    
    next()
})

// Error hantering
app.use((err, req, res, next) => {
    res.send(err.message + " Vill du gå till startsidan?")
})

app.get('/', (req, res) => {
    res.json(res.joke)
})

app.get('/joke', (req, res) => {
    res.json(res.joke)
})

app.listen(port, () => {
    console.log(`Jag lyssnar alltid på ${port}`)
})
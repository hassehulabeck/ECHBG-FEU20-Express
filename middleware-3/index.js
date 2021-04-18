const express = require('express')
const app = express()
const axios = require('axios')

const port = 3000

const cardsapiurl = "https://deckofcardsapi.com/"

let getCards = async function(req, res, next) {

    await axios.get(`${cardsapiurl}/api/deck/new/draw/?count=2`)
        .then((res) => {
            console.log(res.data)
            req.cards = res.data.cards
        })
        .catch((err) => {
            console.error(err)
        })

    // Glöm inte next - om du glömmer så kommer webbläsaren att snurra och processorn att brinna upp.
    next()
}

app.use(getCards)

app.get('/', (req, res) => {
    res.send(req.cards)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
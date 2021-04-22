const express = require('express')
const app = express()
const axios = require('axios')

const port = 3000

// Någonstans att spara kort
let deck = []

const cardsapiurl = "https://deckofcardsapi.com/"

let getCards = async function(req, res, next) {

    await axios.get(`${cardsapiurl}/api/deck/new/draw/?count=10`)
        .then((res) => {
            console.log(res.data)
            deck = [...deck, ...res.data.cards]
        })
        .catch((err) => {
            console.error(err)
        })

    // Glöm inte next - om du glömmer så kommer webbläsaren att snurra och processorn att brinna upp.
    next()
}

app.use(getCards)

app.get('/', (req, res) => {
    res.send(deck)
})

app.get('/draw/:number', (req, res) => {
    if (deck.length > 0 && req.params.number < deck.length - 1) {
        res.cards = []
        for (i=0; i<req.params.number; i++) {
            let slump = Math.floor(Math.random() * deck.length)
            res.cards.push(deck[slump])
        }
        res.json(res.cards)
    }
    else {
        res.send('Det finns inga kort')
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
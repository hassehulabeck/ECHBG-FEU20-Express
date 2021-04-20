const express = require('express')
const app = express()
const port = 3000

const products = [
    {
        id: 4,
        name: 'Hammare',
        color: 'red'
    },
    {
        id: 'A47dtE',
        name: 'Hyvel',
        price: 49
    }
]

app.get('/', (req, res) => {
    res.send('Welcome')
})

// Visa alla produkter
app.get('/products', (req, res) => {
    res.json(products)
})

// Visa en produkt - det som står efter kolon återfinns i req.params
app.get('/products/:productId', (req, res) => {
    let selectedProduct = products.find((product) => {
        return product.id == req.params.productId
    })
    res.json(selectedProduct)
})


app.listen(port, () => {
    console.log(`Nu lyssnar jag på port ${port}`)
})
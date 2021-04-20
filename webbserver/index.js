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
        name: 'Hyvel red',
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
    let selectedProducts = products.filter((product) => {
        for (property in product) {
            if (product[property].toString().includes(req.params.productId)) {
                return product
            }
        }
    })
    res.json(selectedProducts)
})


app.listen(port, () => {
    console.log(`Nu lyssnar jag på port ${port}`)
})
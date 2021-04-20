const express = require('express')
const router = express.Router()
const products = require('./products')

// Root-path här betyder "http://localhost:3000/products"
router.get('/', (req, res) => {
    res.json(products)
})

// Pathen här betyder "http://localhost:3000/products/:id"
router.get('/:productname', (req, res) => {
    let selectedProduct = products.find((p) => {
        return p.name == req.params.productname
    })
    res.json(selectedProduct)
})

// Root-path här betyder "http://localhost:3000/products"
router.post('/', (req, res) => {
    console.log(req.body)
    // OBS. Jag utför ingen validering eller tänker på säkerhet här.
    products.push(req.body)
    res.send("Produkt inlagd")
})


module.exports = router
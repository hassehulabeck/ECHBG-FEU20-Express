const express = require('express')
const router = express.Router()
const products = require('./products')

router.get('/', (req, res) => {
    res.json(products)
})

router.get('/:id', (req, res) => {
    let selectedProduct = products.find((p) => {
        return p.id == req.params.id
    })
    res.json(selectedProduct)
})


module.exports = router
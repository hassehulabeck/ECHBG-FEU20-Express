const express = require('express')
const router = express.Router()

router.get('/products', (req, res) => {
    res.json(products)
})

router.get('/products/:id', (req, res) => {
    let selectedProduct = products.find((p) => {
        return p.id == req.params.id
    })
    res.json(selectedProduct)
})


module.exports = router
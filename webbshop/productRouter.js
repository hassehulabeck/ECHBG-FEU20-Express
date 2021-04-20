const express = require('express')
const router = express.Router()

// Json-filer kan "importeras" utan att du behöver göra dem till moduler (module.exports)
const products = require('./products.json')

router.route('/')
    .get((req, res) => {
        res.json(products)
    })
    .post((req, res) => {
        // Här kan du göra bättre säkerhetskontroll. 
        // Kontrollera exempelvis om produkten (namnet) redan finns i arrayen.
        if (req.body.id != null) {

            // Gör om eventuella strängvärden i "price" till number. 
            req.body.price = Number(req.body.price)

            products.push(req.body)

            /* Det återstår för dig att spara products till filen så att ändringarna blir kvar. 
                Förmodligen behöver du använda fs och skriva till filen (.writeFile) med rätt metod (w+ eller w?) (så att du skriver över det tidigare innehållet) och sedan stänger den igen.
            */

        }
        res.send("Product inserted")
    })

router.route('/:id')
    .get((req, res) => {
        let selectedProduct = products.find((product) => {
            return product.id == req.params.id
        })
        if (selectedProduct != null) {
            res.json(selectedProduct)
        }
        else {
            res.json({msg: 'No such product', link: 'http://localhost:3000/products'})
        }
    })
    .put((req, res) => {
        // Hämta först index för aktuell produkt
        let selectedProduct = products.findIndex((product) => {
            return product.id == req.params.id
        })
        // Därefter uppdaterar du rätt element i arrayen med de nya uppgifterna. 
        if (selectedProduct != -1) {
            products[selectedProduct] = req.body
            res.json({msg: 'Success. Product updated'})
        }
    })
    .delete((req, res) => {
        let selectedProduct = products.findIndex((product) => {
            return product.id == req.params.id
        })
        if (selectedProduct != -1) {
            // ta bort produkten med .splice
            products.splice(selectedProduct,1)
            res.json({msg: 'Wohoo. Product erased.'})
        }
        else {
            res.json({msg: 'No such product found, Dave. Do you want me to open the bay doors?'})
        }
    })

module.exports = router
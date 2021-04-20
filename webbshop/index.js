const express = require('express')
const app = express()

const products = import('./products.json')


console.log(products[1].name)
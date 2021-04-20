const express = require('express')
const app = express()

const products = require('./products.json')

console.log(products[0].name)
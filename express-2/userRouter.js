const express = require('express')
const router = express.Router()

router.get('/user', (req, res) => {
    res.status(403).send('Not authorized')
})

module.exports = router
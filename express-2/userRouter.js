const express = require('express')
const router = express.Router()

// Root-path här betyder "http://localhost:3000/users"
router.get('/', (req, res) => {
    res.status(403).send('Not authorized')
})

module.exports = router
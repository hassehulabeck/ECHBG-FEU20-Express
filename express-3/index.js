const express = require('express')
const app = express()
const users = require('./users')

const port = 3001

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id
    // Leta reda på en user
    let user = users.find((user) => {
        return user.id == id
    })
    // Om vi inte hittar något.
    if (user == null) {
        user = {msg: 'Nothing here'}
    }
    res.json(user)
})


app.listen(port, () => {
    console.log(`Lyssnar nu på ${port}`)
})
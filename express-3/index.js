const express = require('express')
const app = express()
const users = require('./users')

const port = 3001

app.use(express.urlencoded())

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id
    // Leta reda på en user
    let user = users.find((user) => {
        return user.id === Number(id)
    })
    // Om vi inte hittar något.
    if (user == null) {
        user = {msg: 'Nothing here'}
    }
    res.json(user)
})

app.post('/users', (req, res) => {
    // Liten validering
    if (req.body.id != null) {
        users.push(req.body)
        res.send("Yes")
    }
    else {
        res.send("no")
    }
})


app.listen(port, () => {
    console.log(`Lyssnar nu på ${port}`)
})
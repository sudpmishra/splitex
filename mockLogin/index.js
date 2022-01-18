require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());

const users = [{ name: 'admin', password: 'Pass@1234' }, { name: 'John', password: 'Pass@1234' }, { name: 'Kevin', password: 'Pass@1234' }];
app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/posts', authenticateToken, (req, res) => {
    const fPosts = posts.filter(post => post.author === req.user.user.name)
    res.json(fPosts);
})

app.post('/login', (req, res) => {
    const user = {
        name: req.body.name,
        password: req.body.password
    }
    authenticatedUser = users.find(u => u.name === user.name && u.password === user.password)
    if (authenticatedUser) {
        const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET)
        res.json({ accessToken: token, refreshToken: '' })
    }
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(4000)
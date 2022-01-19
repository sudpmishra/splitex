require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());

const users = require('./users.json');
const feeds = require('./feeds.json');

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    authenticatedUser = users.find(u => u.email === email && u.password === password)
    if (authenticatedUser) {
        delete authenticatedUser["password"];
        const token = jwt.sign(authenticatedUser, process.env.ACCESS_TOKEN_SECRET)
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

app.get('/feed', authenticateToken, (req, res) => {
    const fPosts = feeds.filter(post => (post.paidBy === req.user.id || post.paidFor === req.user.id));
    const count = fPosts.length;
    res.json({ count, feed: fPosts });
})

app.get('/friends', authenticateToken, (req, res) => {
    const friends = users.filter(u => u.id !== req.user.id);
    res.json(friends.map(u => ({ id: u.id, name: u.name, email: u.email, picture: u.picture })));
})

app.listen(4000)
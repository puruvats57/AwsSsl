const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // You can use any template engine you prefer

app.set('views', path.join(__dirname, 'views'));


const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    // Add more users as needed
];

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        res.send('Login successful');
    } else {
        res.send('Login failed. Please check your username and password.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

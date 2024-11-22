const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');

const savedUsers = [ //list of users premade
    {
        username: "John",
        password: "black"
    },
    {
        username: "diddy",
        password: "chill"
    }
]

app.listen(PORT, () => { //start server on port 3000
    console.log("Server is listening on port " + PORT);
});

app.get('/', (req, res) => { //starts index.html for /
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get('/login', (req, res) => {//loads /login url for login.html
    res.sendFile(path.join(__dirname, "/login.html"));
})

app.use(bodyParser.urlencoded({extended:true})); //middleware for bodyparser


app.post('/login', (req, res) => { //post info from login page
    const userName = req.body.name; //fetch name
    const userPassword = req.body.password; //fetch password

    const validUser = savedUsers.find(e => e.username === userName && e.password === e.password) //returns true if password and username exist

    if (validUser) { //if statements if exists
        res.send("Successfully logged in")
    } else {
        res.send("Access denied");
        
    }
})
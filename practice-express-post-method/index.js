const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const phones = require('./phones.json')
const cors = require('cors')

const users = [
    { "id": 1, "Name": "Sabila", "email": "sabila@gmail.com" },
    { "id": 2, "Name": "Sabnur", "email": "sabnur@gmail.com" },
    { "id": 3, "Name": "Sakila", "email": "sakila@gmail.com" },
]


app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Data show hosse Ui te")
})

app.get('/more', (req, res) => {
    res.send("More data is comming soon")
})

app.get("/phones", (req, res) => {
    res.send(phones)
})

// dynamically data load
app.get('/phones/:id', (req, res) => {
    const id = req.params.id;
    // console.log("my id is: ", id) // aikhane route er last path ba idta paoa jabe.

    const phone = phones.find(phone => phone.id === parseInt(id)) || {};
    res.send(phone)
})


app.get("/users", (req, res) => {
    res.send(users)
})

// Post method use:
app.post("/users", (req, res) => {
    console.log("Post hit kortese")
    console.log(req.body);  // app.use(express.json()) call na korle error diba.
    const newUser = req.body;
    newUser.id = users.length + 1;
    console.log(newUser)
    users.push(newUser);
    res.send(newUser)  // form theke paoa input er object a id property add kore abar send kore dilam. fole oi post method er fetch korar somoi .then er data te id soho newUser k pabo
})

app.listen(port, () => {
    console.log("My server port is: ", port)
})
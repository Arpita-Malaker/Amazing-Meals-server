const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsInfo = require('./data/chefsInfo.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running')
});


//add chefs info for server

app.get('/chefsInfo', (req, res) => {
    
    res.send(chefsInfo);
})

app.get('/chefsInfo/:id', (req, res) => {
    
    console.log("hello")
})








app.listen(port, () => {
    console.log(`Chefs comming: ${port}`)
})
const express = require('express');

const app = express();
const log = console.log;
const path = require('path');
const PORT = 8080;

app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


app.listen(PORT, function() {
    log("Server is running on port 8080...")
})
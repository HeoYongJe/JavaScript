const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const port = 80
const path = require('path'), async = require('async'), fs = require('fs');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/sample.html'));
})

app.get('/list', (req, res) => {
    res.send('Hello World!')
})

app.post("/list", (req, res) => {
    console.log(req.body);
    res.send({ status: 'SUCCESS' });
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
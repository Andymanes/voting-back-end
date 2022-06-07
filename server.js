const express = require('express');
const apiCall = require('./controllers/api_call')
const test = require('./controllers/test')
const app = express()
const apikey = process.env.API_KEY
const PORT = process.env.PORT || 4000
const cors = require('cors');  

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.use(cors());
app.use('/test', test)

app.use('/api', apiCall)



app.listen( PORT, ()=>{
    console.log(`Listening at port ${PORT}`)
})
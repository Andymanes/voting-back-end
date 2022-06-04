const express = require('express');
const apiCall = require('./controllers/api_call')
const app = express()

const PORT = process.env.PORT || 4000


app.get('/', function(req, res) {
    res.send('Hello World')
})



app.use('/test', apiCall)



app.listen( PORT, ()=>{
    console.log(`Listening at port ${PORT}`)
})
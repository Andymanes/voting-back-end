const express = require('express');
const senate = require('./controllers/senate')
const house = require('./controllers/house')
const app = express()
const apikey = process.env.API_KEY
const PORT = process.env.PORT || 4000
const cors = require('cors');  

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.use(cors());
app.use('/house', house)

app.use('/senate', senate)



app.listen( PORT, ()=>{
    console.log(`Listening at port ${PORT}`)
})
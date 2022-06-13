const express = require('express');
const senate = require('./controllers/senate')
const house = require('./controllers/house')
const congress = require('./controllers/congress')
const senateBills = require('./controllers/senateBills')
const houseBills = require('./controllers/houseBills')
const app = express()
const apikey = process.env.API_KEY
const PORT = process.env.PORT || 4000
const cors = require('cors');  

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.use(cors());
app.use('/senate/bills', senateBills)
app.use('/house/bills', houseBills)
app.use('/house', house)
app.use('/senate', senate)



app.listen( PORT, ()=>{
    console.log(`Listening at port ${PORT}`)
})
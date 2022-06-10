const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', function(req, res, next) {
    const URL = `https://api.propublica.org/congress/v1/117/house/members.json`
    const options = {
        headers: {
            'Content-type': 'application/json',
            'X-API-Key': `ugWVCNHEaD2T3iLIeMniDGwdVrkrOuTKhm75mmxK`
        }
    }
    fetch(URL, options).then(resp=>resp.json()).then(data=>res.send(data)).catch(err=>res.send(err))
})
    


module.exports = router
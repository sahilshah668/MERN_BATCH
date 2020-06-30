const express = require('express')
const router = express.Router()


router.get('/newsfeed',(req,res) => {
    res.render('newsfeed/index')
})


module.exports = router
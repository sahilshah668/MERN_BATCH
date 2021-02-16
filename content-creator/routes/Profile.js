const express = require('express')
const router = express.Router()

router.get('/profile',(req,res) => {
    res.render('profile/index')
})


module.exports = router

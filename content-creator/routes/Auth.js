const express = require('express')
const router = express.Router()


router.get('/',(req,res) => {
    res.render('unAuthenticated/login')
})


module.exports = router
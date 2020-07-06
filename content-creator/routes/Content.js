const express = require('express')
const router = express.Router()
const {ensureAuthenticated} = require('../helper/authHelper')
const Content = require('../models/ContentModel')


router.get('/newsfeed',ensureAuthenticated,(req,res) => {
    res.render('newsfeed/index')
})

router.post('/addContent',ensureAuthenticated,(req,res) => {
    const newContent = new Content({
        userId:req.user._id,
        title:req.body.title,
        description:req.body.description
    })
})


router.get('/userContent',ensureAuthenticated,(req,res) => {
    Content.find({userId:req.user._id})
     .then(content => {
         console.log(content)
     })
})

// _id: 5f0004455be6b33c38f7e28b,
// googleID: '106057382564236091618',
// name: 'sahil shah',
// email: 'sahilshah22269@gmail.com',
// image:
//  'https://lh6.googleusercontent.com/-PMNX-hzwrGQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmWmBsgbO00IDAMt69SuAHJfo99yw/photo.jpg',
// __v: 0

module.exports = router
const express = require('express')
const router = express.Router()
const User = require('../models/user')

// get a list of users from the database
router.get('/users',function(req,res,next){
    User.find({}).then(function(users){
        res.send(users)
    }).catch(next)
})

// add a new users to database
router.post('/users',function(req,res,next){
    User.create(req.body).then(function(users){
        res.send(users)
    }).catch(next)
})

// update a user in the database
router.put('/users/:id',function(req,res,next){
    User.findOneAndUpdate({_id: req.params.id},req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user)
        })
    })
})

// delete a user in the database
router.delete('/users/:id',function(req,res,next){
    User.findOneAndDelete({_id: req.params.id}).then(function(user){
        res.send(user)
    })
})

module.exports = router
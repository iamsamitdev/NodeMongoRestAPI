const express = require('express')
const mongoose = require('mongoose')

// Setup express app
const app = express()

// Connect to mongodb
// mongoose.connect('mongodb://localhost:27017/nodejseventdb')
mongoose.connect('mongodb://samit:123456@localhost:27017/nodejseventdb')
mongoose.Promise = global.Promise

app.use(express.json())

// การสร้าง router ใน express
// app.get('/api', (req, res) => res.send('It working!'))

// โหลด router
app.use('/api',require('./routes/api'))

// error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message})
})

app.listen(process.env.port || 4000, function(){
    console.log('Ready to Go!')
})
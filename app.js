const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();

// import route section
const appRouter = require('./routes/route');
const authRouter = require('./routes/auth');

// Import schema
const Student = require('./models/student');

// declare db url
const uri = "mongodb+srv://gyen_test:gyen6987@gyencluster.lfnk3.mongodb.net/node-class-mongo?retryWrites=true&w=majority";
//  process.env.MONGO_URL;

//  Db connection instance
mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
   }).then((res) => {
        console.log('Connected');
   }).catch((err) => {
    //    console.log('Connection halted');
       err => console.error();
})


// routes section
app.use('/', appRouter);
app.use('/auth', authRouter);

app.listen(3000, function() {
    console.log('listening on 3000')
})
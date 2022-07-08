
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const route = require('../backend/route/user')
const dotenv = require('dotenv');



app.set('view engine','ejs');

app.use(express.urlencoded({extended : true})) // allows us to access info coming in from forms

app.use('/',route)

dotenv.config();


app.listen(8000);




const url = "mongodb+srv://alihaider:12345@cluster0.7uqamub.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url).then(console.log("mongodb connected")).catch(err => console.log(err)
    );

const user = require('../models/user_model');

let data_user = new user({
    Username : 'ali',
    Password : '12ali',
    Email : 'alihaider@gmail.com',
    Token:'ali123'
})
// data_user.save()

const c = user.find({},function(err,docs){

    exports.array = docs
})








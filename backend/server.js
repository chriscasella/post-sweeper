const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const port = process.env.PORT || 8080;
const db = mongoose.connection;
mongoose.connect(
  "mongodb://" + process.env.MLAB_USER +  ":" + process.env.MLAB_PASS + "@ds135714.mlab.com:35714/stnd0ut"
);

app.use(cors())
//const routes = require('./config/routes.js');

const userSchema = mongoose.Schema({
    city: String,
    zipcode : Number,
    keywords: Array
});

const userPref = mongoose.model('userPref', userSchema);
const standOut = new userPref({
    city: 'Philadelphia',
    zipcode: 19125,
    keywords: ['javascript','developer']
});
// standOut.save(function (err, stndOut) {
//     if (err) return console.error(err);
//     if(stndOut) return console.log('success!')
// });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(' were connected!');
});
app.listen(port, () => console.log(`Listening on port ${port}`));
app.get('/', (req, res)=>{
    userPref.find({}, (err, userPrefs)=>{
        res.send(userPrefs)
        console.log(userPrefs)
    })
})


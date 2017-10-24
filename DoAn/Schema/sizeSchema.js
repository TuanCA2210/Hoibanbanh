//1.require mongoose
const mongoose = require('mongoose')


//3.tao schema
const Schema = mongoose.Schema;

let SizeCake = new Schema({
  name :{
    type : String,
    require:true
  }

}, {collection :'SizeCake'});

module.exports = mongoose.model('SizeCake', SizeCake);

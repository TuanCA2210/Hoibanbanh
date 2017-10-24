const sizeModel = require('./sizeSchema');
const config = require('./config.json');
const mongoose = require('mongoose')

mongoose.connect(config.connectionString,(err)=>{
  if(err){
    console.log(err);
  }else {
    console.log('connect db success');;
  }
})

sizeModel.create({
  name : "40x40"

});
mongoose.connection.close();

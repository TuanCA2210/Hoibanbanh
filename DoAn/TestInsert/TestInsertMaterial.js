const materialModel = require('./MaterialSchema');
const config = require('./config.json');
const mongoose = require('mongoose')

mongoose.connect(config.connectionString,(err)=>{
  if(err){
    console.log(err);
  }else {
    console.log('connect db success');;
  }
})

materialModel.create({
  name : "egg"

});
mongoose.connection.close();

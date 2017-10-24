const cakeModel = require('../Schema/CakeSchema');
const config = require('../config.json');
const mongoose = require('mongoose')

mongoose.connect(config.connectionString,(err)=>{
  if(err){
    console.log(err);
  }else {
    console.log('connect db success');;
  }
})
var date_create = new Date();
var datetime = date_create.getDate() + "/"
+ (date_create.getMonth()+1)  + "/"
+ date_create.getFullYear() + " @ "
+ date_create.getHours() + ":"
+ date_create.getMinutes() + ":"
+ date_create.getSeconds();

cakeModel.create({
  name : "gau",
  cake_category: "59d3ac817f6d88167032e6d4",
  price : 1234,
  material: "59d3ab74c2a3f724246bf1d8",
  size : "59d3abfeb67fc11ec45e9cdf",
  linkImage : "123",
  quantum : 100,
  date_create: datetime,

});
mongoose.connection.close();

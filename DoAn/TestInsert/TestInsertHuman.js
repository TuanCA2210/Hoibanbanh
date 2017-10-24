const humanModel = require('./HumanSchema');
const config = require('./config.json');
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

humanModel.create({
  name : "Kien",
  phone : 01234556781,
  password: "admin",
  email : "xuanha31@gmail.com",
  address : " Ha Noi",
  roll : 1,
  date_create: datetime,
  block : false
});
mongoose.connection.close();

const express =require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const { json } = require("express");
const app =express();

const port =process.env.PORT || 1727;

app.use(express.static('public'));
mongoose.connect("mongodb://localhost:27017/personalinfo")
  .then(() => console.log('MongoDB Connected Successfuly'))
  .catch(err => console.log(err));

app.get("/",(req,res)=>
{
    res.sendFile('./index.html')
});
app.listen(port,()=>{
    console.log("server is running on port no. %d",port);
});
const empSchema = new mongoose.Schema({
  name : {
    type:String,
    required:true
  },
  email : {
    type:String,
    required:true,
    unique:true
  },
  contactno:{
    type:Number,
   required:true,
   unique:true
  },
  message:{
    type:String,
    required:true
  }

})
const Register = new mongoose.model("Personal",empSchema);
module.exports = Register;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.post("/sign_up", async (req,res)=>{
  try{
    const registerEmployee = new Register({
      name : req.body.name,
      email : req.body.email,
      contactno : req.body.contactno,
      message : req.body.message
    })
   const registered = await registerEmployee.save();
   res.status(201).sendFile('./submit.html');
  }catch(error){
    res.status(400).send(error);
  }
})
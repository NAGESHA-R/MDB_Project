const express=require('express');
const myDB=require("./dbconnect");
const router=express.Router();

router.post('/loginValidation',(req,res)=>{
let phone=req.body.phone;
let password=req.body.password;

let data=[];

data.push(phone);
data.push(password);

let myQuery="select * from userinfo where phone=? and password=?";
myDB.query(myQuery,data,(err,result)=>{
    if(err)
    {
        console.log("some error:"+err);
    }
    else{
        res.send(result);
    }
})
})
module.exports=router;
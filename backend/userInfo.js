const express=require('express')
const myDB=require('./dbconnect.js')
const router=express.Router()

router.post('/registration',(req,res)=>{
    let name=req.body.name
    let mail=req.body.mail
    let phone=req.body.phone
    let address=req.body.address
    let password=req.body.password
    
    let data=[];//creating the array of data

    data.push(name);
    data.push(mail);
    data.push(phone);
    data.push(address);
    data.push(password);

    let myQuery="insert into userinfo(name,mail,phone,address,password) values(?,?,?,?,?)";
    myDB.query(myQuery,data,(err,result)=>{
        if(err){
            console.log("some error"+err);
        }
        else{
            res.send(result)
        }
    })
})



module.exports=router;
const express=require('express')
const myDB=require('./dbconnect')
const router=express.Router()
router.post('/supplier',(req,res)=>{
    let Id=req.body.ID;
    let supname=req.body.supname;
    let supmail=req.body.supmail;
    let supphone=req.body.suppname;
    let item=req.body.item;

    let data=[];
     data.push(Id);
     data.push(supname);
     data.push(supmail);
     data.push(supphone);
     data.push(item);

     let myQuery="insert into supplier(Id,supname,supmail,supphone,item) values(?,?,?,?,?)";
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
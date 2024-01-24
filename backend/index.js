const express= require('express')//initialized of  express js
//before initialize install mysql,express,cors,body-parser,
const cors=require('cors')       //initialized of  express js
const bp=require('body-parser')
// const myDb=require('./dbconnect')
const userinfo=require('./userInfo')
const loginValidation=require('./loginValidation')
const supplier=require('./supplier')

const app=new express()


app.use(cors({
    origin:"*"
}))

app.use(express.urlencoded({
    extended:false,
}))

app.use(bp.json())
app.use('/',userinfo)
app.use('/',loginValidation)
app.use('/',supplier)




app.listen(8000,(err)=>{
    if(err)
    {
        console.log("unable to start server");
    }
    else{
        console.log("server running at port 8000");
    }
})

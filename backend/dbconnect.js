const mysql=require('mysql')
//for connecting the database
const myDB=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"inventory"
})

myDB.connect(function(err){
    if(err)
    {
        console.log("error connecting to mysql"+err);
    }
    else{
        console.log("successfully connected to mysql...")
    }
})


module.exports=myDB
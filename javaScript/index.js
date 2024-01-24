$(function(){

// ajax calling from frontend
$('#regbtn').on("click",function(){

let Name=$("#name").val();
let mail=$("#mail").val();
let phone=$("#phone").val();
let address=$("#adss").val();
let password=$("#cpassword").val();


// console.log(Name,mail,phone,address,option,password);
$.ajax({
    url:"http://localhost:8000/registration",
    type:"POST",
    datatype:"json",
    data:{"name":Name,"mail":mail,"phone":phone,"address":address,"password":password},
    success: function(result){
        alert("registration successfull..");
    }
})
})
//login verification
$("#logbtn").on('click',function(){
    let phone=$('#pnumber').val();
    let password=$('#pword').val();

    $.ajax({
        url:"http://localhost:8000/loginValidation",
        type:"POST",
        datatype:"json",
        data:{"phone":phone,"password":password},
        success: function(result){
            if(result.length>0)
            {
                window.location='../html/option.html';
            }
            else{
                alert("invalide login..");
            }
        }
    })
})
$("#adding").on("click",function(){
    alert('hello');
    let Id=$("#id").val();    
    let supname=$("#supname").val();    
    let supmail=$("#supmail").val();    
    let supphone=$("#suphone").val();    
    let item=$("#item").val();        

    $.ajax({
        url:"http://localhost:8000/supplier",
        type:"POST",
        datatype:"json",
        data:{"ID":Id,"supname":supname,"supmail":supmail,"supphone":supphone,"item":item},
        success:function(){
            alert("data added successfully..");  
        }
    })
})
})

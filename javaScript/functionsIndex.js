function moveto(){
    window.scrollTo(233,600);
 }
 function Regvalidate(){
     let name=document.querySelector("#name").value;
     if(name.trim()==""){
         alert("Name should be fill!!");
         return; 
     }
     let phone=document.getElementById("phone").value;
     if(phone.search(/^[0-9]+$/)==-1 || phone.length!=10)
     {
         alert("Mobile Number Should be proper!!");
         return;
     }
     let address=document.getElementById("adss").value;
     if(address.trim()=="")
     {
         alert("Address should be fill!!");
         return;
     }
     let mail=document.getElementById("mail").value;
     if(mail.trim()=="")
     {
         alert("mail should be fill!!");
         return;
     }
     let pass1=document.querySelector("#password").value;
     let pass2=document.querySelector("#cpassword").value;
     if(pass1.trim()=="" ||pass2.trim()==""){
         alert("Password should be correct!!");
         return;
     }
     if(pass1!=pass2||(pass1.length && pass2.length)<5){
         alert("passwords is not matching");
         return;
     }
 }
 function logvalidate(){
     let pnumber=document.querySelector("#pnumber").value;
     if(pnumber.trim()=="" || (pnumber.length)!=10)
     {
         alert("phone number Required!!");
         return;
     }
     let password=document.querySelector("#pword").value;
     if(password.trim()=="" ||password<5)
     {
         alert("Password required!!");
         return;
     }
 }
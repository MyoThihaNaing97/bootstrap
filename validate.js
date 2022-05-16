function validate() {
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var username =document.getElementById('username');
var mail =document.getElementById('email');
var password =document.getElementById('password');
var repassword = document.getElementById('repwd');

    if(username == null || username ==""){
        alert("Please Enter Valid Name");
        return false;
    }
    if(mail == null || mail==""){
        alert("Please Enter Valid Email");
        return false;
    }
    if(password != repassword){
         alert("Your Password is Not Valid");
         return false;
    }
    alert("Your Form is Valid");
    return true;
   
}
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
// var login =document.getElementById('login');
// login.addEventListener('click',function(){
//     // if(document.getElementById('mail').value=="naokai28@gmail.com" && document.getElementById('pwd').value){
//     //     localStorage.setItem("Email","email is naokai28@gmail.com");
//     //     // localStorage.setItem('Password',);
//     //     window.open('home.html');
//     // }  
//     var email =document.getElementById('mail').value;
//     localStorage.setItem("mail", email )
//     // window.open('home.html');
// });
function goHome(){
    var email =document.getElementById('mail').value;
    localStorage.setItem("mail", email )
    window.open('home.html');
}

// window.localStorage.setItem("Email",document.getElementById('mail').value);
    // window.localStorage.setItem("Password", document.getElementById('pwd'.value));
var mail =document.getElementById('email');
var password =document.getElementById('password')
var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validate(mail) {
    if(mail.value.match(format)){
        return alert("Your Email is Valid");
    }
    else{
        return alert("Please Enter Your Valid Email");
    }
}
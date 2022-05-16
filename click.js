
function validate() {
    // var msg = document.getElementById('msg');
    // var x= document.getElementById('nametxt').value;
    let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    var user =document.getElementById('username').value;
    var email =document.getElementById('email').value;
    var password =document.getElementById('pwd').value;
    var repwd =document.getElementById('repwd').value;
    if(user == ""){
        document.getElementById("msg1").textContent = "Please fill name!";
        document.getElementById("msg1").style.color ="red";
        // msg.textContent="Please Fill This Text";
        // msg.style.color='red';       
    }
    else{
        msg1.textContent="";
    }
    if(!mailRegex.test(email)){
        document.getElementById('msg2').textContent="Please fill email";
        document.getElementById('msg2').style.color="red";
    }
    else {
        msg2.textContent="";
    }
    if(password ==""){
        document.getElementById('msg3').textContent="Please fill password";
        document.getElementById('msg3').style.color="red";
    }
    else{
        msg3.textContent="";
    }
    if(repwd != password){
        document.getElementById('msg4').textContent="Please fill password";
        document.getElementById('msg4').style.color="red";
    }else{
        msg4.textContent="";
    }


    // msg.textContent="";  
}
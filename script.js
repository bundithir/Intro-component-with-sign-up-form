var ic_name = document.getElementById("icon-err-name");
var ic_last = document.getElementById("icon-err-last");
var ic_mail = document.getElementById("icon-err-email");
var ic_pass = document.getElementById("icon-err-pass");

var name_err = document.getElementById("name");
var last_err = document.getElementById("last");
var email_err = document.getElementById("email");
var pass_err = document.getElementById("pass");

var in_name = document.getElementById("f-name");
var in_last = document.getElementById("f-last");
var in_email = document.getElementById("f-email");
var in_pass = document.getElementById("f-pass");

var btn =document.getElementById("btn");

const valid =(e)=>{
    e.preventDefault();
    const icon = [ic_name,ic_last,ic_mail,ic_pass];
    const input = [in_name,in_last,in_email,in_pass];
    const text = [name_err,last_err,email_err,pass_err];
    for(let i=0;i<=3 ;i++ ){
        let value = input[i].value;
        if(value == '' || value === undefined){
            icon[i].style.display ="block";
            text[i].style.display = "block";
        }
    else{
        icon[i].style.display ="none";
            text[i].style.display = "none";
    }
    }
}


btn.addEventListener('click',valid);
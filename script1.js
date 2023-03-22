let text =document.getElementById("text");
let password =document.getElementById("password");

function validate(){
    if(text.value=="" && password.value==""){
       window.open("index10.html");
    }
    
    else if(password.value=="" && text.value!=""){
        window.open("index10.html");
    }
    else if(password.value!="" && text.value==""){
        window.open("index10.html");
    }
    else{  
       window.open("index9.html");
    }
}
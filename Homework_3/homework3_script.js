function generate () {
    let complexity = document.ElementById("slider".value);

    let value= "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";
    for(var i = 0; i <= complexity; i++){
        password = password + value.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;


    document.getElementById("slider").oninput = function(){

        if(document.getElementById("slider").value > 0){
            document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
        }
        else{
            document.getElementById("length").innerHTML = "Length: 8";
        }
    
    }


function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("copy");

    alert("copied to clipboard");
}
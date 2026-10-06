document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()

    const userEmail = "rayatrj36@gmail.com";
    const userPass = "123456";

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value;
    const digit = parseInt(password);
   
    const regex = /^[a-z-0-9](\.?[a-z-0-9]){5,}@g(oogle)?mail\.com$/   

    if (regex.test(email) == false){
        alert("Enter valid email");
        return;
    }

    else if(password.length < 6 ){
        alert("Password at least 6");
        return;
    }else {
        if(email != userEmail){
            alert("User email does'nt matched");
            return;
        }else if(password != userPass){
            alert("Password invalid");
            return;
        }else{
            alert("Login success")
            window.location.href= "/src/pages/home.html";
            
        }
    }


    
    
    

    


})
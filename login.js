

const login=()=>{
    let email=document.getElementById("email").value 
    let password=document.getElementById("password").value

    let confirmEmail=localStorage.getItem("email")
    let confirmPassword=localStorage.getItem("password")


    if(email==confirmEmail && password==confirmPassword){
        window.location.href="home.html"
    }else{
        alert("Email && Password Is Incorrect ")
    };
}
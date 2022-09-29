const Register=()=>{
  let email=document.getElementById("email").value;
  let password=document.getElementById("pass").value;

  
  localStorage.setItem("email",email)
  localStorage.setItem("password",password)

}
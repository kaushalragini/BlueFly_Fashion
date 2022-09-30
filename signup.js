const Register=()=>{
  let email=document.getElementById("email").value;
  let password=document.getElementById("pass").value;

  
  localStorage.setItem("email",email)
  localStorage.setItem("password",password)
  swal({
    title:"SIGN UP SUCCESSFUL",
    text: "LOG IN NOW!",
     icon:"success",
     background:"red"
  })
  
  
}

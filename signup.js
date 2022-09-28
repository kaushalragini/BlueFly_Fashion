
function Register(){
  let a =document.getElementById("pass").value;
  let c =document.getElementById("email").value;
  
if(a==""){
  document.getElementById("messages").innerHTML="**Please Fill Password**"
   return false;
}
if(a.length<7){
document.getElementById("messages").innerHTML="**Password length must be greater than 7 characters**"
return false;
}
if(a.length>12){
  document.getElementById("messages").innerHTML="**Password length must be smaller than 12 characters**"
  return false;
}
}

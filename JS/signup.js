
const togglePassword =
document.querySelector(".togglePassword");

const password =
document.getElementById("password");

togglePassword.addEventListener("click",()=>{

if(password.type==="password"){
password.type="text";
}
else{
password.type="password";
}

});

document
.getElementById("signupForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

const password =
document.getElementById("password").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

alert("Passwords do not match");

return;

}

alert("Account Created Successfully");

});
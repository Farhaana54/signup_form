var nameCheck=false
var PhoneCheck=false
var emailCheck=false
var PasswordCheck=false
var confirmPasswordCheck=false


var usernameContainer = document.querySelector(".username")
var PhoneContainer = document.querySelector(".Phone")
var emailContainer = document.querySelector(".email")
var PasswordContainer = document.querySelector(".Password")
var confirmPasswordContainer = document.querySelector(".confirmPassword")

var usernameIcon = usernameContainer.querySelector("i")
var PhoneIcon = PhoneContainer.querySelector("i")
var emailIcon = emailContainer.querySelector("i")
var PasswordIcon = PasswordContainer.querySelector("i")
var confirmPasswordIcon = confirmPasswordContainer.querySelector("i")

var usernameLabel = usernameContainer.querySelector("label")
var PhoneLabel = PhoneContainer.querySelector("label")
var emailLabel = emailContainer.querySelector("label")
var PasswordLabel = PasswordContainer.querySelector("label")
var confirmPasswordLabel = confirmPasswordContainer.querySelector("label")

var usernameInput = document.getElementById("username")
var PhoneInput = document.getElementById("Phone")
var emailInput = document.getElementById("email")
var PasswordInput = document.getElementById("Password")
var confirmPasswordInput = document.getElementById("confirmPassword")


usernameInput.addEventListener("keyup", function(){
    var enteredValue = usernameInput.value

    if(enteredValue=="")
    {
        usernameLabel.style.visibility="visible"
        usernameIcon.style.visibility="hidden"
        nameCheck=false
    }
    else
    {
        usernameIcon.style.visibility="visible"
        usernameLabel.style.visibility="hidden"
        nameCheck=true
    }
})


PhoneInput.addEventListener("keyup", function(){
    var enteredValue =  PhoneInput.value
    var isValid = /^\d{10}$/.test(enteredValue);
    if(enteredValue==="")
    {
        PhoneLabel.style.visibility="visible"
        PhoneIcon.style.visibility="hidden"
        PhoneCheck=false
    }
    else if(!isValid)
    {
        PhoneLabel.style.visibility="visible"
        PhoneIcon.style.visibility="hidden"
        PhoneLabel.textContent="Please enter 10 digit number"
        PhoneCheck=false

    }
    else
    {
        PhoneIcon.style.visibility="visible"
        PhoneLabel.style.visibility="hidden"
        PhoneCheck=true
    }
 })


 emailInput.addEventListener("keyup", function(){
    var enteredValue = emailInput.value
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(enteredValue=="")
    {
        emailLabel.style.visibility="visible"
        emailIcon.style.visibility="hidden"
        emailCheck=false
    }
    else if(emailPattern.test(enteredValue))
    {
        emailIcon.style.visibility="visible"
        emailLabel.style.visibility="hidden"
        emailCheck=true
    }
    else
    {
        emailIcon.style.visibility="hidden"
        emailLabel.style.visibility="visible"
        emailLabel.innerText = "Invalid email format"
        emailCheck=false
    }
})



PasswordInput.addEventListener("keyup", function(){
    var enteredPassword = PasswordInput.value;
    var PasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 

    if(enteredPassword == "")
    {
        PasswordLabel.style.visibility = "visible";
        PasswordIcon.style.visibility = "hidden";
        PasswordCheck = false;
    }
    else if(PasswordPattern.test(enteredPassword))
    {
        PasswordIcon.style.visibility = "visible";
        PasswordLabel.style.visibility = "hidden";
        PasswordCheck = true;
    }
    else
    {
        PasswordIcon.style.visibility = "hidden";
        PasswordLabel.style.visibility = "visible";
        PasswordLabel.textContent = "Password must contain at least 8 characters including uppercase, lowercase, and numbers";
        PasswordCheck = false;
    }
});



confirmPasswordInput.addEventListener("keyup", function(){
    var enteredConfirmPassword = confirmPasswordInput.value;
    var enteredPassword = PasswordInput.value;

    if(enteredConfirmPassword == "")
    {
        confirmPasswordLabel.style.visibility = "visible";
        confirmPasswordIcon.style.visibility = "hidden";
        confirmPasswordCheck = false;
    }
    else if(enteredConfirmPassword === enteredPassword)
    {
        confirmPasswordIcon.style.visibility = "visible";
        confirmPasswordLabel.style.visibility = "hidden";
        confirmPasswordCheck = true;
    }
    else
    {
        confirmPasswordIcon.style.visibility = "hidden";
        confirmPasswordLabel.style.visibility = "visible";
        confirmPasswordLabel.innerText = "Passwords do not match";
        confirmPasswordCheck = false;
    }
});

 

 var submitInput=document.getElementById("submitButton")
 var popup=document.querySelector(".popup")

 submitInput.addEventListener("click", function(e){
    e.preventDefault()

    if(nameCheck==true && PhoneCheck==true && emailCheck && PasswordCheck && confirmPasswordCheck)
    {
        popup.textContent="Form submitted successfully"
        popup.style.backgroundColor="blue"
        popup.style.top="10px"
        popup.style.opacity="1"
    }
    else{
        popup.textContent="Please fill the form"
        popup.style.backgroundColor="red"
        popup.style.top="10px"
        popup.style.opacity="1"
    }

    setTimeout(
        function(){
            popup.style.top="-40px"
            popup.style.opacity="0"
        },2000)
    
 })


var signinEmail = document.getElementById("signinEmail")
var signinPassword = document.getElementById("signinPassword")

var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")





var signUpArray = []

if (localStorage.getItem("users") == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem("users"))
}


function isSignupEmpty() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword == "") {
        return false
    } else {
        return true
    }
}

function isEmailExist() {
    for (let i = 0; i < signUpArray.length; i++) {

        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

function signUp() {
   
 if (validation()){
    if (isSignupEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="form-control w-100 bg-danger text-white  my-3">All inputs is required</span>'
        return false
    }

    let signup = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    }

    if (signUpArray.length == 0) {
        signUpArray.push(signup)
        localStorage.setItem("users", JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = ' <p class="bg-success text-white  form-control w-100  my-3">Success</p>'
        return true
    }

    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<p class="bg-danger text-white my-3  form-control w-100">email already exists</p>'
    } else {
        signUpArray.push(signup)
        localStorage.setItem("users", JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<p class="bg-success text-white  form-control w-100  my-3">Success</p>'
    }
 }else{
    alert("wrong inputs")
 }

}

function isSigninEmpty() {
    if (signinEmail.value == "" || signinPassword == "") {
        return false
    } else {
        return true
    }
}

function logIn() {
    if (isSigninEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<p class="form-control w-100 bg-danger text-white  my-3">All inputs Are Required</p>'
        return false
    }
    email = signinEmail.value
    password = signinPassword.value

    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
           
            location.replace("welcome.html")

        }
        else  {
            document.getElementById('incorrect').innerHTML = '<p class="form-control w-100 bg-danger text-white  my-3">incorrect email or password</p>'

        }
       


    }
   }


function logout() {
    location.replace("index.html")
}

function validation(){
    var nameRegex=/^[A-Za-z]{2,}$/;
    var emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    var passwordRegex=/^[A-Za-z]{2,}/;

    if(nameRegex.test(signupName.value)==true&&emailRegex.test(signupEmail.value)==true&&passwordRegex.test(signupPassword.value)==true){
        return true
    }else{
        return false
    }
}
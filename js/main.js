var signinEmail = document.getElementById("signinEmail")
var signinPassword = document.getElementById("signinPassword")

var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")
var userName = document.getElementById("userName")





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
            console.log(signUpArray[0].name)
            document.getElementById('title1').innerHTML =
             `<div class=" bg-ok box d-flex justify-content-center align-items-center " id="title2">
            <div
                class="container text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-ok2 d-flex flex-column justify-content-center align-items-center">
                <button class="btn1 btn btn-info mb-4" onclick="logout()">Log out</button>
                <div >
                    <h3 class="mb-4 text-white" id="userName">
                   welcome ${signUpArray[0].name}
                    </h3>
                </div>
                
    
            </div>
    
        </div>`
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
    var nameRegex=/^[A-Z a-z]{2,}$/;
    var emailRegex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var passwordRegex=/^[a-z]{2,}[0-9]{1,}?$/;
 
    if(nameRegex.test(signupName.value)==true&&emailRegex.test(signupEmail.value)==true&&passwordRegex.test(signupPassword.value)==true){
        return true
    }else{
        return false
    }
}
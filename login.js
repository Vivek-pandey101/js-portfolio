document.addEventListener("DOMContentLoaded", function () {
  const containerOne = document.getElementById("container3");
  const containerTwo = document.getElementById("container4");
  const logIn = document.getElementById("login");
  const signUp = document.getElementById("signup");
  containerTwo.classList.add("signupField");

  signUp.addEventListener("click", () => {
    containerOne.classList.add("loginField");
    containerTwo.classList.remove("signupField");
  });

  logIn.addEventListener("click", () => {
    containerTwo.classList.add("signupField");
    containerOne.classList.remove("loginField");
  });
});

document.addEventListener('DOMContentLoaded', function(){
    const email = "test@gmail.com";
    const password = '123456789';
    const inputEmail = document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');
    
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', ()=>{
        if(inputEmail.value === email && inputPassword.value === password){
            window.location.href = 'index.html';
        }
        else{
            alert("email or password is incorrect");
        }
    })
});
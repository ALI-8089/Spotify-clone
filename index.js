 
// const form=document.getElementById('form');
// const email=document.getElementById('email');


// form.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     checkEmail();
// });
// function checkEmail(){
//  const emailValue =  email.value.trim();

//  if(emailValue ===""){
//     setErrorEmail(email, 'Email cannot be blank');
//  }else if(!isEmail(emailValue )){
//      setErrorEmail(email, 'Email is not valid')
//  }else{
//      setSuccess(email);
//  }
//  function setErrorEmail(input, message){
// const formControl = input.parentElement;
// const small = formControl.querySelector('small');
// small.innerText = message;

// formControl.className = 'form-control error'
//  }
//  function setSuccess(){
// const formControl = input.parentElement;
// formControl.className = 'form-control success';
//  }
$(document).ready(function(){
    $('#signIn-form'),validate({
        rules:{
            emailAddress:{
                required:true,
                email:true
            }
        }
    })
})
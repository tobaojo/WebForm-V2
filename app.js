const form = document.querySelector('.web-form');
const firstname = document.querySelector('#firstname');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#cpassword');


form.addEventListener('submit', function(e){
e.preventDefault();

checkRequired([firstname, surname, email, password, password2]);
checkMatch(password, password2)


function checkRequired(inputArr){
inputArr.forEach(function(input){
  if (input.value.trim() === '') {
    showError(input,`${getFieldName(input)} is required`)
  }
  else {
    showSuccess(input);
  }
})
}
});

function showError(input, msg){
  const formControl = input.parentElement;
  formControl.className = 'form-control fail'
  const small = formControl.querySelector('small');
  small.innerText = msg;
}

function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkMatch(input1, input2){
  if (input1.value !== input2.value) {

    showError(input2, 'Passwords do not match')
  }
}

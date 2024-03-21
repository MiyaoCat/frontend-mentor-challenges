const $form = document.querySelector('form');
const $button = document.querySelector('button');
const $error = document.querySelectorAll('.error');

const fName = document.querySelector("[name='fName']"); 
const lName = document.querySelector("[name='lName']"); 
const password = document.querySelector("[name='password']"); 
var errorIcons = document.querySelectorAll('.error-icon');

$form.addEventListener('submit', function(event) {
	event.preventDefault();
  const $emailError = document.querySelector('.email .error');
  var fNameValue = fName.value;
  var lNameValue = lName.value;
  var passwordValue = password.value;
  
  if (fNameValue === '') {
    errorIcons[0].style.display = 'block';
    fName.classList.add('error-state');
    $error[0].style.display = 'block';
  } else {
    errorIcons[0].style.display = 'none';
    fName.classList.remove('error-state');
    $error[0].style.display = 'none';
  }

  if (lNameValue === '') { 
   errorIcons[1].style.display = 'block';
   lName.classList.add('error-state');
   $error[1].style.display = 'block';
  } else {
    errorIcons[1].style.display = 'none';
    lName.classList.remove('error-state');
    $error[1].style.display = 'none';
  }

	var $inputEmail = document.querySelector("input[type='email']");


	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = $inputEmail.value;

  const trimmedEmail = emailInput.trim(); 

  if (emailInput === '' || trimmedEmail && !emailRegex.test(trimmedEmail)) {
    $error[2].style.display = 'block';
    $inputEmail.classList.add('error-state');
    errorIcons[2].style.display = 'block';
  } else {
    $error[2].style.display = 'none';
    $inputEmail.classList.remove('error-state');
    errorIcons[2].style.display = 'none';
  }

  if (passwordValue === '') { 
   errorIcons[3].style.display = 'block';
   password.classList.add('error-state');
   $error[3].style.display = 'block';
  } else {
    errorIcons[3].style.display = 'none';
    password.classList.remove('error-state');
    $error[3].style.display = 'none';
  }
})
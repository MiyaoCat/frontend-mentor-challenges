const $form = document.querySelector('form');
const $button = document.querySelector('button');
const $emailError = document.querySelector('.email .error');

const fName = document.querySelector("[name='fName']"); 
const lName = document.querySelector("[name='lName']"); 
var errorIcons = document.querySelectorAll('.error-icon');

$form.addEventListener('submit', function(event) {
	event.preventDefault();
  const $emailError = document.querySelector('.email .error');
  var fNameValue = fName.value;
  var lNameValue = lName.value;

  if (fNameValue == '') {
    errorIcons[0].style.display = 'block';
    fName.classList.add('error-state');

  } else {
    errorIcons[0].style.display = 'none';
    fName.classList.remove('error-state');
  }

  if (lNameValue === '') {
    
     errorIcons[1].style.display = 'block';
    
  }

	var $inputEmail = document.querySelector("input[type='email']");


	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = $inputEmail.value;

  const trimmedEmail = emailInput.trim(); 

  if (emailInput === '' || trimmedEmail && !emailRegex.test(trimmedEmail)) {
    $emailError.style.display = 'block';
    $inputEmail.style.border = '1px solid red';
    $inputEmail.style.color = 'red';
  } else {
    $emailError.style.display = 'none';
  }

  if (fName === '') {
    $emailError.style.display = 'block';
    $input.style.border = '1px solid red';
    $input.style.color = 'red';
  }
})
const $form = document.querySelector('form');
const $button = document.querySelector('button');
const $emailError = document.querySelector('.email .error');

const fName = document.querySelector("[name='fName']"); 

$form.addEventListener('click', function(event) {
	event.preventDefault();
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
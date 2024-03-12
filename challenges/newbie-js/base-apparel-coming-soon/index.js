const $form = document.querySelector('form');
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $errorIcon = document.querySelector('.error-icon');
const ink = getComputedStyle(document.querySelector('.error')).getPropertyValue('color');
const borderColor = getComputedStyle(document.querySelector('.normal-voice')).getPropertyValue('color');
function isValidEmail(email) {
  // Use a regular expression to check if the email is valid
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}


$form.addEventListener('submit', function(event) {
	event.preventDefault();

	const emailInput = $input.value;
	const $error = document.querySelector('.error');
	
	if ( !isValidEmail(emailInput) ) {
		$error.style.display = 'block';
		$input.style.border = `1px solid ${ink}`;
		$errorIcon.style.display = 'block';
	} else {
		console.log('success');
		$error.style.display = 'none';
		$input.style.border = `1px solid ${borderColor}`;
		$errorIcon.style.display = 'none';
	};
	
	
	
})
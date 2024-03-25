const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $error = document.querySelector('.error');


$form.addEventListener('submit', function(event) {
	event.preventDefault();

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const emailInput = $input.value;

	const trimmedEmail = emailInput.trim(); 

	if (emailInput === '' || trimmedEmail && !emailRegex.test(trimmedEmail)) {
      $error.style.display = 'block';
      $input.classList.add('input-error');
    } else {
    	$error.style.display = 'none';
    	$input.classList.remove('input-error');
    }
})
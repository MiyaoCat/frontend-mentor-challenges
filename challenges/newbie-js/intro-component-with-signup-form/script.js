$form = document.querySelector('form');
$button = document.querySelector('button');
$emailError = document.querySelector('.email');

$form.addEventListener('click', function(event) {
	event.preventDefault();
	var $input = document.querySelector("input[type='email']");
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = $input.value;

  const trimmedEmail = emailInput.trim(); 

  if (emailInput === '' || trimmedEmail && !emailRegex.test(trimmedEmail)) {
    $emailError.style.display = 'block';
    $input.style.border = '1px solid red';
  } else {
    $emailError.style.display = 'none';
  }
})
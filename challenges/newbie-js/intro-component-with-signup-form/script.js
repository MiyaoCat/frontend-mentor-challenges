$button = document.querySelector('button');
$error = document.querySelector('.error');
$button.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('click');
})
const shareButton = document.querySelector('.share');
const $shareMenu = document.querySelector('.share-menu');

function shareMenu() {
	event.preventDefault();
	console.log('click');

	$shareMenu.style.opacity = '1';
	$shareMenu.style.visibility = 'visible';
	$shareMenu.style.display = 'flex';
}



$articleCard = document.querySelector('.share-menu');

$articleCard.addEventListener('click', function() {
	if ($shareMenu.style.opacity === '1') {
		$shareMenu.style.opacity = '0';
		$shareMenu.style.visibility = 'hidden';
	} 
})
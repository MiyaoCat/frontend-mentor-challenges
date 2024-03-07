const shareButton = document.querySelector('.share');
const $shareMenu = document.querySelector('.share-menu');

// function shareMenu() {
// 	event.preventDefault();
// 	console.log('click');

// 	$shareMenu.style.opacity = '1';
// 	$shareMenu.style.visibility = 'visible';
// 	$shareMenu.style.display = 'flex';
// }




function shareMenu() {
  const $shareMenu = document.querySelector('.share-menu'); // Replace 'yourShareMenuId' with the actual ID of your share menu

  if ($shareMenu.style.opacity === '1') {
    // If the menu is currently visible, hide it
    $shareMenu.style.opacity = '0';
    $shareMenu.style.visibility = 'hidden';
    $shareMenu.style.display = 'none';
  } else {
    // If the menu is currently hidden, show it
    $shareMenu.style.opacity = '1';
    $shareMenu.style.visibility = 'visible';
    $shareMenu.style.display = 'flex';
  }
}

function hideMenu() {
	event.preventDefault();
	console.log('click');

	$shareMenu.style.opacity = '0';
	$shareMenu.style.visibility = 'hidden';
}
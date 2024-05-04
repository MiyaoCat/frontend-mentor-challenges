const menuButton = document.querySelector('.hamburger-menu');
const menuExitButton = document.querySelector('.exit-menu-btn');
const menu = document.querySelector('.menu');

function toggleMenu() {
	if (menu.style.marginLeft ==='500px') {
		// menu.style.display = 'block';
		menu.style.marginLeft = '72px';
		menuButton.style.display = 'none';
		menuExitButton.style.display = 'block';
		
	} else {
		menu.style.marginLeft = '500px';
		menuButton.style.display = 'block';
		menuExitButton.style.display = 'none';
	}
}

console.log('menu')
console.log(menu);
const menuButton = document.querySelector('.hamburger-menu');
const menuExitButton = document.querySelector('.exit-menu-btn');
const menu = document.querySelector('.site-menu');

function toggleMenu() {

	menu.style.display('none')
	if (menu.style.display === 'none') {
		menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
	} else {
		menu.style.display = 'none'
	}

}


console.log('menu')
console.log(menu);
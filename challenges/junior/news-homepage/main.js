const menuButtonToggle = document.querySelector('.menu-button-toggle');
const menu = document.querySelector('.site-menu');
const body = document.querySelector('body');

function toggleMenu() {
	var computedDisplay = window.getComputedStyle(menu).getPropertyValue('display');

	menu.style.display = computedDisplay === 'none' ? 'flex' : 'none';

	menuButtonToggle.toggleAttribute('data-closeButton');

	body.toggleAttribute('data-overlay');
}

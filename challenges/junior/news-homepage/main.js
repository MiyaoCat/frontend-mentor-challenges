const menuButtonToggle = document.querySelector('.menu-button-toggle');
const menu = document.querySelector('.menu-wrap');
const body = document.querySelector('body');

const toggle = function toggleMenu() {
	var computedDisplay = window.getComputedStyle(menu).getPropertyValue('display');

	menu.style.display = computedDisplay === 'none' ? 'block' : 'none';

	menuButtonToggle.toggleAttribute('data-closebutton');

	body.toggleAttribute('data-overlay');
}

menuButtonToggle.addEventListener('click', function() {
	toggle();
})

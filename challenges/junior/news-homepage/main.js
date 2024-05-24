const menuButtonToggle = document.querySelector('.menu-button-toggle');
const menu = document.querySelector('.menu-wrap');
const body = document.querySelector('body');

const toggle = function toggleMenu() {

	menu.toggleAttribute('data-show');
	menuButtonToggle.toggleAttribute('data-closebutton');
	body.toggleAttribute('data-overlay');
}

menuButtonToggle.addEventListener('click', function() {
	toggle();
})

body.addEventListener('click', function(event) {
	if ( event.target.hasAttribute('data-overlay') ) {
		toggle();
	}
})


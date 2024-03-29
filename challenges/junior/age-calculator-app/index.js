console.log('hi');

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDate = date.getDate();

console.log(`Current date: ${currentMonth}-${currentDate}, ${currentYear}`);

// User inputs a day, month and year
// Store the input of the day, month year


// Get the current day, month, year
// Subtract the current date from the input date

var day = document.querySelector('.day');

day.addEventListener('input', function() {
	var dayValue = day.value;

	console.log('input Day: ', dayValue);
})

const $button = document.querySelector('button');

$button.addEventListener('click', function(event) {
	event.preventDefault();

	console.log('click')
})
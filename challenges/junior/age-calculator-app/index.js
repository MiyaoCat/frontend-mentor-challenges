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

const $button = document.querySelector('button');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

$button.addEventListener('click', function(event) {

	event.preventDefault();

	dayValue = day.value;
	monthValue = month.value;
	yearValue = year.value;

	var birthdate = new Date(yearValue, monthValue - 1, dayValue);

	var birthYear = birthdate.getFullYear();
	var birthMonth = birthdate.getMonth();
	var birthDay = birthdate.getDate();

	console.log('birthdate: ', birthdate);

	var years = currentYear - birthYear;
	var months = Math.abs(currentMonth - birthMonth);
	var days = Math.abs(currentDate - birthDay);

	console.log(`Days: ${days}, Months: ${months}, Years: ${years}`)

})

console.log(date);
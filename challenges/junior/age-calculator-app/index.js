console.log('hi');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

console.log(`Current date: ${currentMonth}-${currentDay}, ${currentYear}`);

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
	var months = currentMonth - birthMonth;
	var days = currentDay - birthDay;

	if (days < 0) {
		months--;
		var monthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
		days += monthDays;
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	console.log(`Days: ${days}, Months: ${months}, Years: ${years}`)

})

console.log(currentDate);
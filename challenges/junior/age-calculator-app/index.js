const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

const $button = document.querySelector('button');
const $day = document.querySelector('.input-day');
const $month = document.querySelector('.input-month');
const $year = document.querySelector('.input-year');

const $label = document.querySelectorAll('label');
const $error = document.querySelectorAll('.error');
const $input = document.querySelectorAll('input');
const $result = document.querySelectorAll('.result');

const $outputYear = document.querySelector('.total-years');
const $outputMonth = document.querySelector('.total-months');
const $outputDay = document.querySelector('.total-days');

$button.addEventListener('click', function(event) {
	event.preventDefault();

	dayValue = $day.value;
	monthValue = $month.value;
	yearValue = $year.value;

	var birthdate = new Date(yearValue, monthValue - 1, dayValue);

	var birthYear = birthdate.getFullYear();
	var birthMonth = birthdate.getMonth();
	var birthDay = birthdate.getDate();

	var years = currentYear - birthYear;
	console.log(birthdate);
	var months = currentMonth - birthMonth;
	var days = currentDay - birthDay;

	if (days < 0) {
		//subtract 1 from month to get previous month
		months--;
		//set a new date object with previous month's days (0) and get the days (.getDate)
		var monthDays = new Date(currentYear, currentMonth, 0).getDate();
		days += monthDays;
	}

	if (months < 0) {
		//decrement 1 year from current year
		years--;
		//add 12 to months
		months += 12;
	}

	console.log(`Years: ${years}, Months: ${months}, Days: ${days}`)

	//ERROR MESSAGING
	if (yearValue === '') {
		$error[2].style.opacity = 100;
		$error[2].innerHTML = 'This field is required';
		$label[2].classList.add('label-error');
		$input[2].classList.add('input-error');
	} else if (yearValue > currentYear || yearValue <= 0) {
		$error[2].style.opacity = 100;
		$error[2].innerHTML = 'Must be in the past';
		$label[2].classList.add('label-error');
		$input[2].classList.add('input-error');
	} else {
		$error[2].style.display = 'none';
		$label[2].classList.remove('label-error');
		$input[2].classList.remove('input-error');

		$result[0].innerHTML = years;
	}

	if (monthValue === '') {
		$error[1].style.opacity = 100;
		$error[1].innerHTML = 'This field is required';
		$label[1].classList.add('label-error');
		$input[1].classList.add('input-error');
	} else if (monthValue > 12 || monthValue <= 0) {
		$error[1].style.opacity = 100;
		$error[1].innerHTML = 'Must be a valid month';
		$label[1].classList.add('label-error');
		$input[1].classList.add('input-error');
	} else {
		$error[1].style.display = 'none';
		$label[1].classList.remove('label-error');
		$input[1].classList.remove('input-error');

		$result[1].innerHTML = months;
	}

	if (dayValue === '') {
		$error[0].style.opacity = 100;
		$error[0].innerHTML = 'This field is required';
		$label[0].classList.add('label-error');
		$input[0].classList.add('input-error');
	} else if (dayValue > 31 || dayValue <= 0) {
		$error[0].style.opacity = 100;
		$error[0].innerHTML = 'Must be a valid date';
		$label[0].classList.add('label-error');
		$input[0].classList.add('input-error');
	} else {
		$error[0].style.display = 'none';
		$label[0].classList.remove('label-error');
		$input[0].classList.remove('input-error');

		$result[2].innerHTML = days;
	}
})



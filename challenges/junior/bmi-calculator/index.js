const $unitType = document.querySelector('.unit-type');
const $measurements = document.querySelector('.measurements');
const $heightWrap = document.querySelector('.height');

const $imperialType = document.querySelector('#imperial');

const $heightImperial = document.querySelector('.height-imperial');
const $heightMetric = document.querySelector("label[for='heightMetric']");

const weightLabel = document.querySelector('.kg');

// BMI CALCULATION
const heightCm = document.querySelector('#heightMetric');
const heightFeet = document.querySelector('#heightFt');
const heightIn = document.querySelector('#heightIn');
const weightKg = document.querySelector('#weightMetric');
const weightLb = document.querySelector('#weightImperial');

let heightCmValue;
let heightFtValue;
let heightInValue;

let weightKgValue;
let weightLbValue;

heightCm.addEventListener('change', function() {
	heightCmValue = parseInt(this.value);
	calculateBMI()
})

heightFeet.addEventListener('change', function() {
	heightFtValue = parseInt(this.value);
	console.log(heightFtValue);
})

heightIn.addEventListener('change', function() {
	heightInValue = parseInt(this.value);
	console.log(heightInValue);
})

weightKg.addEventListener('change', function() {
	weightKgValue = parseInt(this.value);
	calculateBMI()
})

console.log('weight in kg: ', weightKgValue)



document.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		console.log('metric bmi: ', metricBMI);
		console.log('weight in kg: ', weightKgValue)
	}
})

let metricBMI;

$unitType.addEventListener('change', function() {

	if ($imperialType.checked) {

		if (window.innerWidth <= 678) {
			$measurements.style.gridTemplateRows = '1fr 1fr';
			$heightWrap.style.gridColumn = '1 / 3';
		}

		$heightImperial.style.display = 'flex';
		$heightMetric.style.display = 'none';

		weightLabel.innerText = 'lb';

	} else {

		metricBMI = weightKgValue / (heightCm * heightCm);

		if (window.innerWidth <=650) {
			$measurements.style.gridTemplateRows = '1fr';
			$heightWrap.style.gridColumn = '1 / 2';
		}

		$heightImperial.style.display = 'none';
		$heightMetric.style.display = 'flex';

		weightLabel.innerText = 'kg';
	}
})


function calculateBMI() {
	if (heightCmValue !== '' || heightCmValue !== undefined && weightKgValue !== '' || weightKgValue !== undefined) {
		const heightMeters = heightCmValue / 100;
		metricBMI = ( weightKgValue / (heightMeters * heightMeters) ).toFixed(1);

		console.log('metric bmi: ', metricBMI);
	}
}


























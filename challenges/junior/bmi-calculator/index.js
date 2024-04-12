const $unitType = document.querySelector('.unit-type');
const $measurements = document.querySelector('.measurements');
const $heightWrap = document.querySelector('.height');

const $imperialType = document.querySelector('#imperial');

const $heightImperial = document.querySelector('.height-imperial');
const $heightMetric = document.querySelector('.height-metric');

const weightLabel = document.querySelector('.kg');

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

		if (window.innerWidth <=650) {
			$measurements.style.gridTemplateRows = '1fr';
			$heightWrap.style.gridColumn = '1 / 2';
		}

		$heightImperial.style.display = 'none';
		$heightMetric.style.display = 'flex';

		weightLabel.innerText = 'kg';
	}
})

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
	heightCmValue = this.value;
	console.log(heightCmValue);
})

heightFeet.addEventListener('change', function() {
	heightFtValue = this.value;
	console.log(heightFtValue);
})

heightIn.addEventListener('change', function() {
	heightInValue = this.value;
	console.log(heightInValue);
})

weightKg.addEventListener('change', function() {
	weightKgValue = this.value;
	console.log(weightKgValue);
})

weightLb.addEventListener('change', function() {
	weightLbValue = this.value;
	console.log(weightLbValue);
})

































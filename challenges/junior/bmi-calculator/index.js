const $unitType = document.querySelector('.unit-type');
const $measurements = document.querySelector('.measurements');
const $heightWrap = document.querySelector('.height');

const $imperialType = document.querySelector('#imperial');
const $metricType = document.querySelector('#metric');

const $heightImperial = document.querySelector('.height-imperial');
const $heightMetric = document.querySelector("label[for='heightMetric']");

const $weightLabel = document.querySelector('.kg');

const $bmi = document.querySelector('.bmi');
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
	calculateBMI();
})

heightFeet.addEventListener('change', function() {
	heightFtValue = parseInt(this.value);
	calculateBMI();
})

heightIn.addEventListener('change', function() {
	heightInValue = parseInt(this.value);
	calculateBMI();
})

weightKg.addEventListener('change', function() {
	weightKgValue = parseInt(this.value);
	calculateBMI();
})

let metricBMI;
let imperialBMI;

$unitType.addEventListener('input', function() {

	if ($imperialType.checked) {
		
		calculateBMI();
	
		if (window.innerWidth <= 678) {
			$measurements.style.gridTemplateRows = '1fr 1fr';
			$heightWrap.style.gridColumn = '1 / 3';
		}

		$heightImperial.style.display = 'flex';
		$heightMetric.style.display = 'none';

		$weightLabel.innerText = 'lb';

	} 

	if ($metricType.checked) {

		calculateBMI();
		
		if (window.innerWidth <=650) {
			$measurements.style.gridTemplateRows = '1fr';
			$heightWrap.style.gridColumn = '1 / 2';
		}

		$heightImperial.style.display = 'none';
		$heightMetric.style.display = 'flex';		

		$weightLabel.innerText = 'kg';
	}
})


function calculateBMI() {

	if ($metricType.checked) {
		if (heightCmValue !== '' || heightCmValue !== undefined && weightKgValue !== '' || weightKgValue !== undefined) {

			const heightMeters = heightCmValue / 100;

			metricBMI = ( weightKgValue / (heightMeters * heightMeters) ).toFixed(1);

			if ( !isNaN(metricBMI) ) {
				$bmi.innerHTML = metricBMI;
			} else {
				$bmi.innerHTML = '';
			}
		}
	}	

	if ($imperialType.checked) {
		if (heightFtValue !== '' || heightFtValue !== undefined && heightInValue !== '' || heightInValue !== undefined && weightLbValue !== '' || weightLbValue !== undefined) {

			const heightInInches = heightFtValue * 12 + heightInValue;

			imperialBMI = ( (weightKgValue * 703) / (heightInInches * heightInInches) ).toFixed(1);

			if ( !isNaN(imperialBMI) ) {
				$bmi.innerHTML = imperialBMI;
			} else {
				$bmi.innerHTML = '';
			}

		}
	}
		
}


























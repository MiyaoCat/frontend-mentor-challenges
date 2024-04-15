const $unitType = document.querySelector('.unit-type');
const $measurements = document.querySelector('.measurements');
const $heightWrap = document.querySelector('.height');

const $imperialType = document.querySelector('#imperial');
const $metricType = document.querySelector('#metric');

const $heightImperial = document.querySelector('.height-imperial');
const $heightMetric = document.querySelector("label[for='heightMetric']");

const $weightLabel = document.querySelector('.kg');

const $welcome = document.querySelector('.welcome');
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
		bmiMessage();
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
		bmiMessage();
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
				bmiMessage(metricBMI);
				$welcome.innerHTML = 'Your BMI is...';
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
				bmiMessage(imperialBMI);
				$welcome.innerHTML = 'Your BMI is...';
			} else {
				$bmi.innerHTML = '';
			}
		}
	}
	
}

const $bmiRange = document.querySelector('.bmi-range');
const $resultMessage = document.querySelector('.result-message');

function bmiMessage(calculateBMI) {
	if (calculateBMI < 18.5) {
		$resultMessage.textContent = `Your BMI suggests you're under weight. Your ideal weight is between`;
		$bmiRange.innerHTML = '61.3kg - 85.2kgs';
	}

	if (calculateBMI >= 18.5 && calculateBMI <= 24.9) {
		$resultMessage.textContent = `Your BMI suggests you're a healthy weight. Your ideal wheight is between`;
		$bmiRange.innerHTML = '61.3kg - 85.2kgs';
	}

	if (calculateBMI >= 25 && calculateBMI <= 29.9) {
		$resultMessage.textContent = `Your BMI suggests you're overweight. Your ideal weight is between`;
		$bmiRange.innerHTML = '61.3kg - 85.2kgs';
	}

	if (calculateBMI >= 30 && calculateBMI) {
		$resultMessage.textContent = `Your BMI suggests you're obese. Your ideal weight is between`;
		$bmiRange.innerHTML = '61.3kg - 85.2kgs';
	}
}


// fetch('data.json')
// 	.then(function(response) {

// 		if (!response.ok) {
// 			throw new Error('Network response not ok');
// 		}
// 		return response.json();
// 	})
// 	.then(function(data) {
// 		console.log('data: ', data)
// 		function getWeightRange(inputHeight, data) {
// 			let weightRange = '';

// 			data.forEach(function(range) {
// 				const minHeight = range.height_range_cm.min;
// 				const maxHeight = range.height_range_cm.max;	

// 				if (inputHeight >= minHeight && inputHeight <= maxHeight) {
// 					weightRange = item.weight_range_kg;
// 				}		
// 			});			

// 			return weightRange;
// 			console.log('weight range: ', weightRange);
// 		}			
// 	})


// data of heights and weight
// if weight value is equal to weight in data table
// get coresponding weight range
// apply weight range in bmiRange.innerHTML
















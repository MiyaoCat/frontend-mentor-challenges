const unitType = document.querySelector('.unit-type');
const metricType = document.querySelector('#metric');
const imperialType = document.querySelector('#imperial');

const heightImperial = document.querySelector('.height-imperial');
const heightMetric = document.querySelector('.height-metric');

const weightImperial = document.querySelector('.weight-imperial');
const weightMetric = document.querySelector('.weight-metric');

unitType.addEventListener('change', function() {

	if (imperialType.checked) {
		console.log('imperial')

		heightImperial.style.display = 'flex';
		heightMetric.style.display = 'none';

		weightImperial.style.display = 'flex';
		weightMetric.style.display = 'none';
	} else {
		console.log('other')

		heightImperial.style.display = 'none';
		heightMetric.style.display = 'flex';

		weightImperial.style.display = 'none';
		weightMetric.style.display = 'flex';
	}
})
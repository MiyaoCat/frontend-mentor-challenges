const unitType = document.querySelector('.unit-type');
const metricType = document.querySelector('#metric');
const imperialType = document.querySelector('#imperial');

const heightImperial = document.querySelector('.height-imperial');
const heightMetric = document.querySelector('.height-metric');

const weightLabel = document.querySelector('.kg');

unitType.addEventListener('change', function() {

	if (imperialType.checked) {
		console.log('imperial')

		heightImperial.style.display = 'flex';
		heightMetric.style.display = 'none';

		weightLabel.innerText = 'lb';
		
	} else {
		console.log('other')

		heightImperial.style.display = 'none';
		heightMetric.style.display = 'flex';

		weightLabel.innerText = 'kg';
	}
})



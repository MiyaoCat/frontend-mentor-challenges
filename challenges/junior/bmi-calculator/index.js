const unitType = document.querySelector('.unit-type');
const measurements = document.querySelector('.measurements');
const height = document.querySelector('.height');

const metricType = document.querySelector('#metric');
const imperialType = document.querySelector('#imperial');

const heightImperial = document.querySelector('.height-imperial');
const heightMetric = document.querySelector('.height-metric');

const weightLabel = document.querySelector('.kg');

unitType.addEventListener('change', function() {

	if (imperialType.checked) {

		if (window.innerWidth <= 678) {
			measurements.style.gridTemplateRows = '1fr 1fr';
			height.style.gridColumn = '1 / 3';
		}

		heightImperial.style.display = 'flex';
		heightMetric.style.display = 'none';

		weightLabel.innerText = 'lb';

	} else {

		if (window.innerWidth <=678) {
			measurements.style.gridTemplateRows = '1fr';
			height.style.gridColumn = '1 / 2';
		}

		heightImperial.style.display = 'none';
		heightMetric.style.display = 'flex';

		weightLabel.innerText = 'kg';
	}
})



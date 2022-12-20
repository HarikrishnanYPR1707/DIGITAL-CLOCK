setInterval(displayClock, 500);

function displayClock() {
	var time = new Date();

	var hr = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	var en = 'AM';

	if (hr > 12) {
		hr = hr - 12;
	}

	if (hr == 0) {
		hr = 12;
	}

	if(hr < 10) {
		hr = '0' + hr;
	}

	if(min < 10) {
		min = '0' + min;
	}

	if(sec < 10) {
		sec = '0' + sec;
	}

	if(hr > 12) {
		en = 'PM';
	}

	document.getElementById('clock-container').innerHTML = hr + ':' + min + ':' + sec + ' ' + en;
}
let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 

let hour = 00; 
let minute = 00; 
let second = 00; 
let count = 00; 

if (localStorage.getItem('hr')>0) {
    hour = localStorage.getItem('hr');
}
if (localStorage.getItem('min')>0) {
    minute = localStorage.getItem('min');
}
if (localStorage.getItem('sec')>0) {
    second = localStorage.getItem('sec');
}
if (localStorage.getItem('count')>0) {
    count = localStorage.getItem('count');
}

minute = localStorage.getItem('hr');

startBtn.addEventListener('click', function () { 
	timer = true; 
	stopWatch(); 
}); 

stopBtn.addEventListener('click', function () { 
	timer = false; 
}); 

resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	document.getElementById('hr').innerHTML = "00"; 
	document.getElementById('min').innerHTML = "00"; 
	document.getElementById('sec').innerHTML = "00"; 
	document.getElementById('count').innerHTML = "00"; 
}); 

function stopWatch() { 
	if (timer) { 
		count++; 

		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 

		document.getElementById('hr').innerHTML = hrString; 
		document.getElementById('min').innerHTML = minString; 
		document.getElementById('sec').innerHTML = secString; 
		document.getElementById('count').innerHTML = countString; 
		localStorage.setItem('hr', hrString);
		localStorage.setItem('min', minString);
		localStorage.setItem('sec', secString);
		localStorage.setItem('count', countString);
		setTimeout(stopWatch, 10); 
		
	} 
}

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const getSec = document.getElementById('seconds');
const milliSec = document.getElementById('millisec');
let timerCounter = 0; 

//start button to trigger the stopwatch

//have a counter. then append the counter to the the span id.

let seconds = 00; 
let milliSeconds = 00; 


const stopClock = () => {
	clearInterval(timerCounter); 

}


startBtn.addEventListener('click', () => {
	stopClock();
	timerCounter = setInterval(timer); 

});
	
stopBtn.addEventListener('click', () => {
	clearInterval(timerCounter);	

	})

resetBtn.addEventListener('click', (event) => {
	clearInterval(timerCounter);
	timerCounter = 0; 
	seconds = 0; 
	milliSeconds = 0; 
	milliSec.textContent = '0' + 0;
	getSec.textContent = '0' + 0;

})





function timer() {

	milliSeconds++;
	if (milliSeconds < 9) {
		milliSec.textContent = '0' + milliSeconds;
	}
	if (milliSeconds > 9) {
		milliSec.textContent = milliSeconds; 

	}
	if (milliSeconds > 99) {
		seconds++; 
		getSec.textContent = '0' + seconds; 
		milliSeconds = 0;
		milliSec.textContent = '0' + 0;
		
	}

	if (seconds > 9) {
		getSec.textContent = seconds;

	}

}; 
	


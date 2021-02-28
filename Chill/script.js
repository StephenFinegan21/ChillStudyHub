//Variables to keep track of which state the timer is in - ie. on a break or study mode, timer paused or timer active

let isOnBreak = false;              //When user opens program they are NOT on a break                             
let isPaused = false;               //When user opens program they are NOT paused,
let totalSecondsLeft = 1500;
const timerDisplay = document.getElementById('heading-countdown');

//Buttons to control the timer
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

/*Before starting the study session pause and reset buttons should be disabled
  Program listens for user to start session */
pauseButton.disabled = true;
resetButton.disabled = true;
startButton.addEventListener("click", startSession);



 
function startSession(){
  pauseButton.disabled = false;
  resetButton.disabled = false;
  startButton.disabled = true;

    //If the user has paused previously, keep the timer at the same value instead of resetting to 25 mins
    if(isPaused){
        totalSecondsLeft = totalSecondsLeft;  
    }
    else if(!isOnBreak){
        totalSecondsLeft = 1500;  //If this isn't a break session set time back to 25 mins
    }
    else{
      totalSecondsLeft = 300;  //Break sessions are set to 5 minutes
    }
    
    //runs the countdown function every 1 second, while doing so, listen out for a pause or reset click
    interval = setInterval(countDown, 1000);
    pauseButton.addEventListener("click", pauseSession);
    resetButton.addEventListener("click", resetSession);
}





function pauseSession(){
  pauseButton.disabled = true;
  resetButton.disabled = false;
  startButton.disabled = false;
    isPaused = true;            //Let programme know we have paused
    clearInterval(interval);    // Stops running the countdown clock
    startButton.addEventListener("click", startSession);
    resetButton.addEventListener("click", resetSession);
}


//Stop the countdown and reset all values to their default
function resetSession(){
  clearInterval(interval);
  totalSecondsLeft = 1500;
  let isOnBreak = false;
  let isPaused = false;
  pauseButton.disabled = true;
  startButton.disabled = false;
  resetButton.disabled = true;
  timerDisplay.innerHTML = "25:00";
  
  
}



function countDown(){
  let displayMinutes = Math.floor(totalSecondsLeft / 60);                //Calculates minutes left based on how many seconds are left
  let displaySeconds = totalSecondsLeft % 60;                            //Calculates seconds by getting left over amount of seconds after dividing by 60

  //by default displaySeconds will only show 1 digit if less than 10 eg 24:6 25:0 so we add a 0 in this case to get 25:06. 25:00 etc
  displaySeconds = displaySeconds < 10 ? "0" + displaySeconds : displaySeconds;
 
  
  timerDisplay.innerHTML = displayMinutes + ":" + displaySeconds;
  totalSecondsLeft --; // Seconds value will reduce by 1 every second

  /* Stop the countdown after it reaches zero
    if on break, change status to not on break anymore and vice versa
    restart the session
   **/
  if(totalSecondsLeft === -1){
      clearInterval(interval);
      isOnBreak = !isOnBreak
      startSession();
  }
}

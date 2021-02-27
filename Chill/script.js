








let pomSessionActive = false;
let isPaused = false;
let totalSecondsLeft = 20;
const timerDisplay = document.getElementById('heading-countdown');

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');

timerDisplay.innerHTML = "tett";

startButton.addEventListener("click", startSession());

 function startSession(){
    pomSessionActive = true;
    
    if(isPaused){
        totalSecondsLeft = totalSecondsLeft;
    }
    else{
        totalSecondsLeft = 20;
    }
    
    console.log(totalSecondsLeft);
    interval = setInterval(countDown, 1000);
}





pauseButton.addEventListener("click", function(){
    isPaused = true;
    


})



function countDown(){
    let displayMinutes = Math.floor(totalSecondsLeft / 60);                //Displays minutes left
    let displaySeconds = totalSecondsLeft % 60;                            //Displays seconds left

    //by default displaySeconds will only show 1 digit if less than 10 eg 24:6 25:0 so we add a 0 in this case to get 25:06. 25:00 etc
  displaySeconds = displaySeconds < 10 ? "0" + displaySeconds : displaySeconds; 
  
  timerDisplay.innerHTML = displayMinutes + ":" + displaySeconds;
  totalSecondsLeft --; // Seconds value will reduce by 1 every second

  if(totalSecondsLeft === -1){
      clearInterval(interval);
  }
}
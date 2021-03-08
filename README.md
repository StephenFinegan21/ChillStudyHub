# ChillStudyHub

- A Javascript/HTML/CSS project to help you study
- Still in early stages, have the basic design and pomodoro timer complete
- Displays a relaxing video of a fireplace with the option to set a timer for 25 miute study sessions.
- Can also pause and resume a study session
- Once the study session reaches 0 a timer for a 5 minute break begins.

Future plans
- Add a to do list feature
- Improve the styling of the buttons
- have different background options, eg static images for those who dont want a video, also different video options


------ Basic JS Feature --------
- Keeps track of what state the programme is in using booleans (eg isPaused, isOnBreak)
- When the user clicks on certain buttons these states are changed

-Startsession function will check the states to see what to initialize the timer to
  eg if isPaused is true keep the remaining seconds the same to resume the programme from where it was paused etc .
  
  Using the setInterval function we are able to run the countdown function every 1 second.
  
 -Countdown function will display the current time left and reduce the current time by 1.
 
 * More detailed comments on the code are in the Script.js file

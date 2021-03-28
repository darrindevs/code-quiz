// # AS A coding boot camp student
//#  WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//#SO THAT I can gauge my progress compared to my peers


//# ACCEPTANCE CRITERIA
//#GIVEN I am taking a code quiz
//#WHEN I click the start button
//#THEN a timer starts and I am presented with a question

//todo reset the timer for play again?

//* The timer Function 
    // * uses a global variable called time 
        //* make the variable global so that it can be updated by other functions
        //* The timer is set to 60 seconds 
        //* The timer is displayed to the user in the #timer element
        //* When a user gets a question wrong the timer decrements by 5 seconds
            //* updates the value of the time variable
        //* When the timer reaches 0 the game is over 
            //* triggers the gameOver function 

//* store the interval in a variable
var secondsLeft = 5;
//* target an element to display the secondsLeft variable 
var timeEl = document.querySelector("#timer");
//* target a group of elements to display contextual alerts
var alertEl = document.querySelector("#alert");
var alertTimeUpEl = document.querySelector("#alert-time-up");
var alertSuccessEl = document.querySelector("#alert-success");
var alertWrongAnswerEl = document.querySelector("#alert-wrong-answer");
var alertGameOverEl = document.querySelector("#alert-game-over");
//* Use an onclick attribute on #start-button to trigger timer();
var startBtn = document.querySelector("#start-button");


//* the timer function to do the work 
function timer() {
  //* set interval in variable
  //* the setInterval() method takes a function as its first argument
  var timerInterval = setInterval(function() {
    //* the function is the action that we want to be evaluated at each interval. This function prints a message at each interval
    secondsLeft--;
    timeEl.textContent = "⏲   :" + secondsLeft;

    if(secondsLeft === 0) {
      //* Stops execution of action at set interval
      //* When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
      clearInterval(timerInterval);
      //* Calls function to create and append image
      sendMessage();
    }
    //* The second argument that the setInterval() method takes is the interval 
        //* note that intervals use milliseconds
  }, 1000);
}

//* Call sendMessage() after the interval is cleared to display the alert message
function sendMessage() {
  //! note that this will OVERWRITE any hardcoded content
    alertEl.textContent = "Game Over!";
    alertEl.setAttribute("class", "red");
}
//remove this so that the function doesn't automatically execute on page load
// timer();
//instead we are using an onclick attribute on #start-button 
; 


//* The start Function:
    //* uses an event listener so that when the #start button is clicked it triggers:    
        //* the timer Function 
        //* the questions Function

          


//#WHEN I answer a question
//#THEN I am presented with another question

//* The questions Function: 
    //* A series of questions are stored in an object as key value pairs
            //* like this q1 = 
                // * question = "string"
                // * answers = a1 = false , a2 = false, a3 = true , a4 = false
                    //? the boolean values of each answered are stored as data-attributes? 
    //* uses a query selector to update the content of the #questions element with questions pulled from an array 

//* The answers function:
    //* an event listener is used to track the answer click and determine the result based on the true/false values of the answers 
        //* use IF / ELSE statments to execute functions based on true/false answers

//#WHEN I answer a question incorrectly
//#THEN time is subtracted from the clock

            //* IF false: 
                //* trigger the timer function to decrement by 5 seconds 
                    //* display a message to the user that the answer was incorrect
                        //* user query selector to insert the result content in the #results element
                        //* the result content disappeas after x amount of time 
                //* trigger the questions function to present another question
            //* IF true:  
                //* Increment the score Function 
                    //* display a message to the user that the answer was correct
                        //* user query selector to insert result content in #results element
                        //* the result content disappeas after x amount of time 
                //* trigger the questions function to present another question

//* The score Function displays a score to the user
    //* the score Function uses a query selector to target the #current-score element and display the score to the user 
    //* the score is incremented up 1 by an IF = true statement in the answers Function
        // * when the score = 10 the gameOver function is triggered

//#WHEN all questions are answered or the timer reaches 0
//#THEN the game is over

//* The gameOver function:
    //* is triggered when:
        //* the timer Function = 0 , or
        //* the score Function = 10
    // * displays a Game Over message using a query selector to target the #game-over element and update content 
    //* triggers the save Function 


//#WHEN the game is over
//#THEN I can save my initials and my score

//* The save Function:
    //* displays the score from the score variable
        //* uses a query selector to target the #final-score element to insert the score 
    //* displays a form for the user to enter their initials
        //* uses a query selector to target the #initials-form element for the user top enter their initials
        //* uses a query selector to target the #submit button for the user to save intials and score
    //* uses an event listener on the button click: 
        //* saves the initials and score to local storage 

//* The leaderboard Function:     
    //* gets the initials and score from local storage to display in the leaderboard
    //* uses query selector to target the #leaderboard element to insert the scores from local storage 

    
        
    









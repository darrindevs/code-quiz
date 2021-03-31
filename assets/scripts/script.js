//* store the timer interval in a variable
var secondsLeft = 60;
//* target an element to display the secondsLeft variable 
var timeEl = document.querySelector("#timer");

//* Main grouping of content elements
var introEl = document.querySelector("#intro");
var questionsEl = document.querySelector("#questions");
var quizEl = document.querySelector("#quiz");
var resultsEl = document.querySelector("#results");// this targets the id #results 
var finalScoreEl = document.querySelector("#final-score");
var saveEl = document.querySelector("#save");
var formEl = document.querySelector("#form");
var leaderboardEl = document.querySelector("#leaderboard");
var navigationEl = document.querySelector("#navigation");


//* The questions 
var q1 = document.querySelector("#q1");
var q2 = document.querySelector("#q2");
var q3 = document.querySelector("#q3");
var q4 = document.querySelector("#q4");
var q5 = document.querySelector("#q5");

//* target a group of elements to display contextual alerts
var alertEl = document.querySelector(".alert");
var alertTimeUpEl = document.querySelector("#alert-time-up");
var alertCorrectAnswerEl = document.querySelector("#alert-correct-answer");
var alertWrongAnswerEl = document.querySelector("#alert-wrong-answer");
var theScore = document.querySelector("#the-score");
var gameOverEl = document.querySelector("#game-over");

//* Use an onclick attribute on #start-button to trigger timer();
var startBtn = document.querySelector("#start-button");

//* Click Start button to start quiz 
    //quiz array starts at 0
startBtn.addEventListener('click', function() {
    timer();
    //hide #intro   
    $(introEl).hide();
    //call question 1   
    startQ1();
});

//* Set a variable to track our score 
var score = 0;
function showScore() {
    theScore.textContent = score;
}

//* Use an event listener to listen to the class of the clicked element
    //* if class = correct display a result of Correct and increment score by +1
    //* if class = wrong display a result of Wrong and decrement score by -1
//* Display the result for x seconds and then move on to next question 
var qBtn = document.querySelector('.q-btn');
    quizEl.addEventListener('click', function(event) {
        //* tells us the class of button clicked
        console.log(event.target.className);
        var elementClass = event.target.className; 
        if (elementClass === "q-btn correct") {
            //* display result 
            resultsEl.setAttribute("class", "show");
            resultsEl.textContent = "Correct!";
            score ++;
        } else {
            //* display result 
            resultsEl.setAttribute("class", "show");
            resultsEl.textContent = "Wrong!";
            // substract 5 seconds from the timer 
            secondsLeft-=5;
        }
        // move on to next questions 
         if(questions === 1){
            startQ2();
            } else if ( questions === 2){
            startQ3();
            } else if ( questions === 3){
            startQ4();
            } else if ( questions === 4){
            startQ5();
            }
            setTimeout(function(){ 
                //startQ2();
                $(resultsEl).hide();
             }, 1000);
    })



//* Set a questions variable to iterate from 
questions = 1;
//* Show the first question 
function startQ1() {
    //questions++; 
    $(quiz).show();
    $(q2).show();
    $(q2).hide();
    $(q3).hide();
    $(q4).hide();
    $(q5).hide();
}

//* Show the 2nd question 
function startQ2() {
    questions++; 
    $(q1).hide();
    $(q2).show();
    $(q3).hide();
    $(q4).hide();
    $(q5).hide();
}

//* Show the 3rd question 
function startQ3() {
    questions++; 
    $(q1).hide();
    $(q2).hide();
    $(q3).show();
    $(q4).hide();
    $(q5).hide();
}

//* Show the 4th question 
function startQ4() {
    questions++; 
    $(q1).hide();
    $(q2).hide();
    $(q3).hide();
    $(q4).show();
    $(q5).hide();
}

//* Show the 5th question 
function startQ5() {
    questions++; 
    $(q1).hide();
    $(q2).hide();
    $(q3).hide();
    $(q4).hide();
    $(q5).show();
}



//* The timer Function 
    // * uses a global variable called time 
        //* make the variable global so that it can be updated by other functions
        //* The timer is set to 60 seconds 
        //* The timer is displayed to the user in the #timer element
        //* When a user gets a question wrong the timer decrements by 5 seconds
            //* updates the value of the time variable
        //* When the timer reaches 0 the game is over 
            //* triggers the gameOver function 

//the timer function counts down seconds left and ends game if it reaches 0 before the user answers all the questions 
function timer() {
  //set interval in variable
  //the setInterval() method takes a function as its first argument
  var timerInterval = setInterval(function() {
    //* the function is the action that we want to be evaluated at each interval. This function prints a message at each interval
    secondsLeft--;
    timeEl.textContent = "⏲   :" + secondsLeft;
    
    // check for any of these conditions to end the game: secondsLeft reaches 0 OR quizArray exceeds the number of questions available
    if(secondsLeft === 0) {
      //Stops execution of action at set interval
      //When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
      clearInterval(timerInterval);
      //when timer runs out call gameOver function 
      gameOver();
    }
    //The second argument that the setInterval() method takes is the interval 
        //note that intervals use milliseconds
  }, 1000);
}

//* Call gameOver() after the interval is cleared to display the alert message
function gameOver() {
    $(intro).hide();
    $(quiz).hide();
    $(q2).hide();
    $(q2).hide();
    $(q3).hide();
    $(q4).hide();
    $(q5).hide();
    $(gameOverEl).show();

}
//remove this so that the function doesn't automatically execute on page load
// timer();
//instead we are using an onclick attribute on #start-button  

//* load function sets conditions for initial page load or page refresh
//* we will run this at the end of our scripts 
function load() {
    console.log(introEl);
    introEl.setAttribute("class", "show");
    quizEl.setAttribute("class", "hide");
    gameOverEl.setAttribute("class", "hide");

}

load();

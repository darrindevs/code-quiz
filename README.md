# Code Quiz

<img src="https://zno.s3-us-west-1.amazonaws.com/code-quiz.png" alt="Pic of application"
title="Code Quiz" width="" />

## Deployed Application
[Code Quiz](https://darrindevs.github.io/code-quiz/)

## Summary 
This project uses dynamically updated HTML and CSS powered by JavaScript to run a web based multiple choice quiz. Custom functions and event listeners update the page as the user progress through the quiz.

Third party APIs such as jQuery and Bootstrap provide additional utilities. 

See if you can beat the clock while testing your JavaScript knowledge! 


## Technologies Used
- 🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
- 🌳 jQuery - jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.
- 🦴 HTML - Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.
- 👗 CSS - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. 
- 👢 Bootstrap - Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
- ☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.
- ⛅️ GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.


## Code Snippet

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


## Issues 

I would love to have the chance to complete these for a better score on the assingment if possible. 

- Event listener not working on all questions 
-- only displays "correct"/"wrong" results for question 1

- The gameOver function after question 5 is not advancing the user to the Game Over screen 

- Enter initials incomplete

- Show score incomplete 

- Save to local storage incomplete 


## Author Links
[LinkedIn](https://www.linkedin.com/in/darrinweyers/)
[GitHub](https://github.com/darrindevs)

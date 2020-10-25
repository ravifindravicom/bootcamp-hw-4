/* JavaScript for a quiz on JS Operators. Please see README for known errors and opportunities for code refactoring. */

/* These questions should be in a database somewhere, but for now I am using constants. */
const questionsArray = ["Addition Operator is?", "Subtraction Operator is?", "Multiplication Operator is?", "Division Operator is", "Modulus Operator is?", "Exponentiation Operator is?", "Increment Operator is?", "Decrement Operator is?"];
const answersArray = [
    ["*", "-", "+", "/"],
    ["+", "*", "-", "/"],
    ["+", "-", "*", "/"],
    ["+", "-", "/", "*"],
    ["**", "++", "%", "--"],
    ["%", "++", "**", "--"],
    ["**", "%", "++", "--"],
    ["**", "++", "--", "%"]
];
/* The same database should indicate which solution is correct. For now I use the solutionArray below. */
const solutionArray = [2,2,2,2,2,2,2,2];

var numScores = 0;
var scoresObj = {scoresStr : []};
localStorage.setItem('scoresObj', JSON.stringify(scoresObj));

var myScore = 0;
qCount = 0;
var secondsLeft = 30;
var showResText = document.getElementById("showresult");
var timeEl = document.querySelector(".time");

var injectResultsText = `<h1>  Results </h1> <div id = "rs"> </div>
    <button type="button" onclick="getScores()">GetScores</button>
    <button type="button" onclick="clearScores()">ClearScores</button>`;
var injectInitialCapture = `<textarea id="myTextarea"></textarea>
    <button type="button" onclick="writeToLS()">Submit</button>`;

/* This is called after a run of the quiz is done. */
function printResult(){
    timeEl.textContent = "";
    var resultStr = "You have finished the test. Your score is = " + myScore + `<br> <h3> Enter Initials: </h3>`
    var topText = document.getElementById("toptext");
    topText.innerHTML = resultStr;
    var getinitDiv = document.getElementById("getinit");
    getinitDiv.innerHTML = injectInitialCapture;
}

/* This writes the persistent object. */
function writeToLS() {
    var scoresObj  = JSON.parse(localStorage.getItem('scoresObj'));
    var str = document.getElementById("myTextarea").value;
    scoresObj.scoresStr[numScores] =  "|" + str + " : " + myScore + "|";
    localStorage.setItem('scoresObj', JSON.stringify(scoresObj));
    numScores++;
    showResultsPage();
}

/* This displays the result of the quiz and asks for initials. */
function showResultsPage(){
    var getinitDiv = document.getElementById("getinit");
    getinitDiv.innerHTML = "";
 
    var getShowScoresDiv = document.getElementById("toptext");
    getShowScoresDiv.innerHTML = injectResultsText;
}

/* This is used to get the scores. */
function getScores() {
    scoresObj  = JSON.parse(localStorage.getItem('scoresObj'));
    var showDiv = document.getElementById("rs");
    showDiv.innerHTML = scoresObj.scoresStr;
}

/* This is used to clear the scores. */
function clearScores(){
    numScores=0;
    localStorage.clear();
    var showDiv = document.getElementById("rs");
    showDiv.innerHTML = "";
}

/* This is used to show next set of questions if any. */
function updateText(){
    if (qCount < 8)
    {
    var questionText = document.getElementById("question");
    var firstAns = document.getElementById("ans1");
    var secondAns = document.getElementById("ans2");
    var thirdAns = document.getElementById("ans3");
    var fourthAns = document.getElementById("ans4");
    questionText.textContent = questionsArray[qCount];
    firstAns.textContent = answersArray[qCount][0];
    secondAns.textContent = answersArray[qCount][1];
    thirdAns.textContent = answersArray[qCount][2];
    fourthAns.textContent = answersArray[qCount][3];
    }
    else {
       printResult();
    }   
}

/* The following four functions can be refactored into one function. I ran out of time. */
function getNext1(){
    if(qCount===0) {setTime();};
    if(qCount != 0) {
        if (solutionArray[qCount] === 0) { 
            myScore++;
            showResText.innerHTML = "Correct";
        }
        else {
            secondsLeft = secondsLeft - 5;
            showResText.innerHTML = "Wrong";
        }
    }
    updateText();
    qCount++;
}

function getNext2(){
    if(qCount===0) {setTime();};
    if(qCount != 0) {
        if (solutionArray[qCount] === 1) { 
            myScore++;
            showResText.innerHTML = "Correct";
        }
        else {
            secondsLeft = secondsLeft - 5;
            showResText.innerHTML = "Wrong";
        }
    }
    updateText();
    qCount++;
}

function getNext3(){
    if(qCount===0) {setTime();};
    if(qCount != 0) {
        if (solutionArray[qCount] === 2) { 
            myScore++;
            showResText.innerHTML = "Correct";
        }
        else {
            secondsLeft = secondsLeft - 5;
            showResText.innerHTML = "Wrong";
        }
    }else { }
    updateText();
    qCount++;
}

function getNext4(){
    if(qCount===0) {setTime();};
    if(qCount != 0) {
        if (solutionArray[qCount] === 3) { 
            myScore++;
            showResText.innerHTML = "Correct";
        } 
        else {
            secondsLeft = secondsLeft - 5; /* Reducing time for wrong Ans. */
            showResText.innerHTML = "Wrong";
        }
    }
    updateText();
    qCount++;
}

/* This is the timer. */
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    if(qCount<8) {
        timeEl.textContent = "Time Left: " + secondsLeft;
    }
    if(secondsLeft < 0) {
      clearInterval(timerInterval);
      timeEl.textContent = "";
      printResult();
    }
  }, 1000);
}







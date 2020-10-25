const questionsArray = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8"];
const answersArray = [
    ["Answer 1A", "Answer 1B", "Answer 1C", "Answer 1D"],
    ["Answer 2A", "Answer 2B", "Answer 2C", "Answer 2D"],
    ["Answer 3A", "Answer 3B", "Answer 3C", "Answer 3D"],
    ["Answer 4A", "Answer 4B", "Answer 4C", "Answer 4D"],
    ["Answer 5A", "Answer 5B", "Answer 5C", "Answer 5D"],
    ["Answer 6A", "Answer 6B", "Answer 6C", "Answer 6D"],
    ["Answer 7A", "Answer 7B", "Answer 7C", "Answer 7D"],
    ["Answer 8A", "Answer 8B", "Answer 8C", "Answer 8D"],
];
const solutionArray = [2,2,2,2,2,2,2,2];

var scoresObj = {scoresStr : ""};
localStorage.setItem('scoresObj', JSON.stringify(scoresObj));

var myScore = 0;
qCount = 0;
var secondsLeft = 30;
var showResText = document.getElementById("showresult");
var timeEl = document.querySelector(".time");
var highScoresList;
var highScoresNum = 0;

function printResult(){
    timeEl.textContent = "";
    var resultStr = "You have finished the test. Your score is = " + myScore;
    var topText = document.getElementById("toptext");
    topText.innerHTML = resultStr;
    injectInitialCapture = `<textarea id="myTextarea"></textarea>
        <button type="button" onclick="writeToLS()">Submit</button>`;
    var getinitDiv = document.getElementById("getinit");
    getinitDiv.innerHTML = injectInitialCapture;
}
function writeToLS() {
    scoresObj  = JSON.parse(localStorage.getItem('scoresObj'));
    str = document.getElementById("myTextarea").value;
    scoresObj.scoresStr = scoresObj.scoresStr + "|" + str + " : " + myScore;
    localStorage.setItem('scoresObj', JSON.stringify(scoresObj));
    console.log("The score results I am writing are: " + scoresObj.scoresStr)

  }

function getScores() {
    scoresObj  = JSON.parse(localStorage.getItem('scoresObj'));
    var showDiv = document.getElementById("show-scores");
    console.log("The score results I am reading are" + scoresObj.scoresStr);
    showDiv.innerHTML = scoresObj.scoresStr;
  }

function clearScores(){
    localStorage.clear();
}




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
            console.log("myScore = "+myScore);
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
            secondsLeft = secondsLeft - 5;
            showResText.innerHTML = "Wrong";
        }
    }
    updateText();
    qCount++;
}

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







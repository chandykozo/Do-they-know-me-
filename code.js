var readLineSync = require("readline-sync");
var score = 0;
var questions = [{
        question: "\nWhich city did I do my 10th standard?\n",
        answer: "Kolkata"
    },
    {
        question: "\nWhich city did I finish my Engineering in?\n",
        answer: "Chennai"
    },
    {
        question: "\nAm I a Vegetarian? :D\n",
        answer: "Yes"
    },
    {
        question: "\nWhat's the color of my bike?\n",
        answer: "White"
    }

]

function intro() {
    var userName = readLineSync.question("What's your name?\n")
    console.log("\nWelcome " + userName + " let's play DO YOU KNOW Chandy...")
    console.log("____________________")
}

function play(question, answer) {
    var userAnswer = readLineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("Correct !")
        score += 1;
    } else {
        console.log("wrong :(")
    }
}

function game() {
    for (i = 0; i < questions.length; i++) {
        var q = questions[i];
        play(q.question, q.answer)
    }
}

function showScore() {
    var tot = questions.length;
    console.log("\nAight, You scored : " + score + " out of " + tot)
}

intro();
game();
showScore();
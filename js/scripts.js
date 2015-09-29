$(document).ready (function(){

var questions = [
{
	qNum: 1,
	q: "What team did Babe Ruth first play for?",
	choices: ["Yankees", "Red Sox", "White Sox", "Dodgers"],
	correct: 1
},
{
	qNum: 2,
	q:"What year did the Beatles break up?",
	choices: ["1980", "1969", "1975", "1970"],
	correct: 3
},

{
	qNum: 3,
	q:"Who was one of the most famous serial killers in the 1970s?",
	choices:["Ted Bundy", "Ronald Dominque", "Chester Turner", "H.H. Holmes"],
	correct: 0
}
];

var currentQuestion = 1;
var correctAnswers = 0;
var totalQuestions= questions.length;
var questionIndex= 0;
var correctText= "Correct!";
var wrongText= "Incorrect";

$("#start").click(function() {
	$("#instructions").fadeOut("fast");
	$("#quiz").show("slow", startGame);
});

function startGame() {
	currentQuestion= 1;
		correctAnswers = 0;
		questionIndex = 0;
		$("#questions").show();
		$("#choices").show();
		$("#submit").show();
		$("#playagain").hide();
		$('input:radio[name=radios]').attr('checked',false);
		getQuestion();
};

function getQuestion(){
	questionIndex++;
	$("#current").text(questions[questionIndex].q);
	$("#choice0").text(questions[questionIndex].choices[0]);
	$("#choice1").text(questions[questionIndex].choices[1]);
	$("#choice2").text(questions[questionIndex].choices[2]);
	$("#choice3").text(questions[questionIndex].choices[3]);
	$("#count").text("Question " + currentQuestion + " of " + totalQuestions);
};

/*check answer */

function checkAnswer(){
	var radioValue = $("input[type='radio']:checked").val();
	var userChoice = document.getElementByName('radios');
	

if (radioValue === false) {
	alert ("Please pick an answer");
}

//if correct

else if (radioValue == questions[questionIndex].correct) {
	$("#submit").html('<h2>' + correctText + '<h2>');
	correctAnswers++;
}	else {
	$("#submit").html('<h2>' + wrongText + '</h2>');
};

//next

if (questions[questionIndex].qNum == totalQuestions) {
	$("#next").hide();
	$("#count").text ("Congrats! You got " + correctAnswers + "out of " + totalQuestions + " correct!");

	$("#playagain").show();
	$("#submit").hide();
} else {
	$("#next").show();
};

$("#next").click (function() {
	nextQuestion();
	$('input:radio[name=radios]').attr('checked',false);
});

//click check answer
$("#feedback").click(function() {
	checkAnswer();
});

//next question function
function nextQuestion() {
	$("#next").hide();
	$("#submit").html('<h2>Check Answer</h2>');
	currentQuestion++;
	questionIndex++;
	getQuestion();

};

$("#playagain").click(function() {
	$("#submit").html('<h2>Check Answer</h2>');
	$("#next").show();
	startGame();
});
}});




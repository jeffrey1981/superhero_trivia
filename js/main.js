var heroQuiz = [
	{quest: "Who is Tony Starks assistant?", answer: ["Mary Jane", "Lois Lane", "Pepper Potts"], correctA: 2}, 
	{quest: "What year did Iron Man first apear in comics?", answer: ["1963", "1972", "1967"], correctA: 0}, 
	{quest: "Batman is also knows as?", answer: ["The Caped Crusader", "Man of Steel", "Great Vigilante"], correctA: 0}, 
	{quest: "What is the name of the metal bonded to Wolverine’s bones?", answer: ["Vibranium", "Cosmitanium", "Adamantium"], correctA: 2}, 
	{quest: "What superhero is Jean Grey from X-Men?", answer: ["Phoenix", "Rogue", "Storm"], correctA: 1}, 
	{quest: "Captain America fights crime against which evil organization?",answer: ["12", "6", "17"], correctA: 0}, 
	{quest: "How many core Avengers are there?", answer: ["The Green Goblin", "Thor's adopted brother", "Tony Stark's friend"], correctA: 2}, 
	{quest: "Who is Loki?", answer: ["The Green Goblin", "Thor's adopted brother", "Tony Stark's friend"], correctA: 2}, 
	{quest: "Who played Superman in the 1978 movie?", answer: ["Adam West", "Michael Keaton", "Christopher Reeve"], correctA: 2}, 
	{quest: "Dr.Doom played the villian in which film?", answer: ["X-Men", "Superman Returns", "Fantastic 4"], correctA: 2}
];

var score = 0;
var gameTheme = "";
var currentQuestion = 0;

var $a1 = $('#a1');
var $a2 = $('#a2');
var $a3 = $('#a3');
var $bub = $('#bub');

$a1.on('click', answerQuestion);
$a2.on('click', answerQuestion);
$a3.on('click', answerQuestion);


function answerQuestion(evt) {
	var choice = parseInt(this.id.substr(1)) - 1;
	console.log('They answered: ' + heroQuiz[currentQuestion].answer[choice]);
	console.log(choice === heroQuiz[currentQuestion].correctA ? 'correct' : 'wrong biach')

	if (currentQuestion < heroQuiz.length - 1) {

		// do scoring

		currentQuestion++;
		render();
	} else {
		// ran out of questions
	}
}

// $('#beTheHero').click(function (){
// 	$("#bub").prepend(quest[0]);
// })

// function startGame(){
// 	for ( var i = 0; i < heroQuiz.length; i++){
// 		var output = "";

		// output += quest[i] + '\n';
		// for ( var j = 0; j < 3; j++){
		// 	var x = j+1; //created a temporary varable to prevent the [0] in the array from showing and adds 1 to t.
		// 	output += x + '). ' + Ans[i][j] + '\n'; //+= concatination - adding in strings

		// }
		
		// var answer = prompt(output);
		// document.getElementById("answers").innerHTML = "The correct answer is " + Ans[i][ansKey[i]];
		// alert("The correct answer is " + Ans[i][ansKey[i]]);//tell you where to look for the answer.

// 	}
// }


$('#startBtn').on('click', startGame);

function startGame(evt) {
	evt.preventDefault();
 	currentQuestion = 0;
 	score = 0;

    render();	
}


function render(){
	// display the question
	$bub.html(heroQuiz[currentQuestion].quest);

	// display the answers
	$a1.html(heroQuiz[currentQuestion].answer[0]);
	$a2.html(heroQuiz[currentQuestion].answer[1]);
	$a3.html(heroQuiz[currentQuestion].answer[2]);


	// display the score

}




//Pseudocode

// when page loads user chooses either villian or superhero
// 	two click options.
// 	if user clicks superhero
// 		then superhero theme populates and game begins
// 	if user cicks villian mode
// 		then villain mode populates

// game begins
// 	question populates
// 	then possible answers pupulate.
// 	if user clicks correct anser 
// 		then alert negative notification
// 		then a power point is assigned to player
// 	if wrong answer is clicked
// 		then alert negative notification
// 	once completed next answer is populated

// game ends
// 	if player wins 10 power points
// 		alert winner
// 	if player looses to villian
// 		alert player

// if you choose superhero add class hero remove class villian and visa vera
// if it is an array, 0 is the question and 1-5 are the answers, then when they
// 	click on the correct array number they win that round. 

// question array
// answer array is a nested array
// set as much as i can to primive data use jquery.
//to set theme set it as an integer funtion.
//



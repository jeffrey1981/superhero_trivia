
var heroQuiz = [
	{quest: "Who is Tony Starks assistant?", answer: ["Mary Jane", "Lois Lane", "Pepper Potts"], correctA: 2}, 
	{quest: "What year did Iron Man <br> first apear in comics?", answer: ["1963", "1972", "1967"], correctA: 0}, 
	{quest: "Batman is also knows as?", answer: ["The Caped Crusader", "Man of Steel", "Great Vigilante"], correctA: 0}, 
	{quest: "What is the name of the metal <br> bonded to Wolverine’s bones?", answer: ["Vibranium", "Cosmitanium", "Adamantium"], correctA: 2}, 
	{quest: "What superhero is <br> Jean Grey from X-Men?", answer: ["Phoenix", "Rogue", "Storm"], correctA: 1}, 
	{quest: "Captain America fights crime against <br> which evil organization?",answer: ["Hydra", "Cobra", "Synge"], correctA: 0}, 
	{quest: "How many core Avengers are there?", answer: ["12", "6", "17"], correctA: 2}, 
	{quest: "Who is Loki?", answer: ["God of Demons", "God of Mischief", "God of Mordor"], correctA: 1}, 
	{quest: "Who played Superman in the 1978 movie?", answer: ["Adam West", "Michael Keaton", "Christopher Reeve"], correctA: 2}, 
	{quest: "Plastic man belonged to which <br> superhero Team?", answer: ["X-Men", "Fantastic 4", "Justice League"], correctA: 1},
	{quest: "Dr.Strange first apeared in which year?", answer: ["1968", "1992", "1963"], correctA: 2},
	{quest: "Peter Parker is a skilled...?", answer: ["Editor", "Photographer", "Writer"], correctA: 1},
	{quest: "Dr.Doom played the villian <br> in which film?", answer: ["X-Men", "Superman Returns", "Fantastic 4"], correctA: 2},
	{quest: "Dare Devil protects what city?", answer: ["Hells Kitchen", "Boston", "NYC"], correctA: 0},
	{quest: "Who played Ducard in the <br> 2005 Batman Begins film?", answer: ["Tom Wilkinson", "Ralph Fiennes", "Liam Neeson"], correctA: 2}
	//{quest: "Who does number two work for?", answer: ["", "", ""], correctA: },

];

var score = 0;
var gameTheme = "";
var currentQuestion = 0;
var winGame = "<p>YOU WON THIS  <br> ROUND, BUT YOU <br> HAVEN'T SEEN THE <br> LAST OF ME!!</p>";
var loseGAme = "<p>MUAHAHAHA <br> NOT THIS TIME <br> YOU DO GOODER!!</p>";

var $a1 = $('#a1');
var $a2 = $('#a2');
var $a3 = $('#a3');
var $bub = $('#bub');
var $tally = $('#tally');

$a1.on('click', answerQuestion);
$a2.on('click', answerQuestion);
$a3.on('click', answerQuestion);


function startGame(evt) {
	evt.preventDefault();
 	currentQuestion = 0;
 	score = 0;

    render();	
}


function answerQuestion(evt) {
	var choice = parseInt(this.id.substr(1)) - 1;
	console.log('They answered: ' + heroQuiz[currentQuestion].answer[choice]);
	console.log(choice === heroQuiz[currentQuestion].correctA ? 'BANG!' : 'POWW!')
	
	
	if (currentQuestion < heroQuiz.length - 1) {

		//account for correct answers

		if (choice === heroQuiz[currentQuestion].correctA)
			score ++

			currentQuestion++;
			render();
		} else {
			if (tally > 7 && currentQuestion === 15) {
				$('#gameover').html(winGame).fadeIn(1000);

				hideDivs();
				
			} else if (tally < 8 && currentQuestion === 15) {
				$('#gameover').html(loseGAme).fadeIn(1000)
	
};

$('#startBtn').on('click', startGame);

$(document).ready(function() {
	hideBubs();
	hidegameover();
});

function hideBubs() {
	$('#a1').hide();
	$('#a2').hide();
	$('#a3').hide();
}
function showBubs() {
	$('#a1').fadeIn(1000);
	$('#a2').fadeIn(1000);
	$('#a3').fadeIn(1000);
	$bub.fadeIn(1000);
}
function hidegameover() {
	$('#gameover').hide();
}
function hideDivs() {
	hideBubs();
	$('#tally').hide();
	$('#bub').hide();
	$('#qbub').hide();
	$('#question').hide();
	$('#answers').hide();
	$('.bubble').hide();
}

function render() {

	//answer bubbles will appear.
	showBubs();
	
	// display the question
	$bub.html(heroQuiz[currentQuestion].quest);

	// display the answers
	$a1.html("<br>" + heroQuiz[currentQuestion].answer[0]);
	$a2.html("<br>" + heroQuiz[currentQuestion].answer[1]);
	$a3.html("<br>" + heroQuiz[currentQuestion].answer[2]);

	// display the score
	$tally.text(score);

	//ens game message
	hidegameover();
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


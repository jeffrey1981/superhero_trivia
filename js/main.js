

var score = 0;
var counter = 0;
var gameTheme = "";

// $('#beTheHero').click(function (){
// 	$("#bub").prepend(quest[0]);
// })

function startGame(){
	for ( var i = 0; i < quest.length; i++){
		var output = "";

		output += quest[i] + '\n';
		for ( var j = 0; j < 3; j++){
			var x = j+1; //created a temporary varable to prevent the [0] in the array from showing and adds 1 to t.
			output += x + '). ' + Ans[i][j] + '\n'; //+= concatination - adding in strings

		}
		
		var answer = prompt(output);
		document.getElementById("answers").innerHTML = "The correct answer is " + Ans[i][ansKey[i]];
		alert("The correct answer is " + Ans[i][ansKey[i]]);//tell you where to look for the answer.

	}
}

// function atartGame() {
// 	var ansKey = document.getElementById([i][ansKey[i]]);
// 		if (ansKey.clicked === true){
// 			alert("BOOM!"){
// 			}
// 		else {
//          alert("WHA WHA WHAAAaaaaa")
// 			}

// 	}		
// }

var quest = ["Who is Tony Starks assistant?", 
			"What year did Iron Man first apear in comics?", 
			"Batman is also knows as?", 
			"What is the name of the metal bonded to Wolverine’s bones?", 
			"What superhero is Jean Grey from X-Men?", 
			"Captain America fights crime against which evil organization?",
			"How many core Avengers are there?", 
			"Who is Loki?", 
			"Who played Superman in the 1978 movie?", 
			"Dr.Doom played the villian in which film?"];


var Ans = [["Mary Jane", "Lois Lane", "Pepper Potts"],
		["1963", "1972", "1967"],
		["The Caped Crusader", "Man of Steel", "Great Vigilante"],
		["Vibranium", "Cosmitanium", "Adamantium"],
		["Phoenix", "Rogue", "Storm"],
		["Hydra", "SKULL", "Cobra"],
		["12", "6", "17"],
		["The Green Goblin", "Thor's adopted brother", "Tony Stark's friend"],
		["Adam West", "Michael Keaton", "Christopher Reeve"],
		["X-Men", "Superman Returns", "Fantastic 4"]];


var ansKey = [2, 0, 0, 2, 1, 0, 2, 2, 2, 2];

$(".pick").on("click", function(evt){
	$('div.pick').hide();
});

// var $elements = elements[0];
// for (var i = elements.length - 1; i >= 1; i--) {
//      $elements = $elements.add(elements[i]);
// }
// $elements.show();




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

















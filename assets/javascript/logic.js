// this is code for the countdown timer
var timeInSecs;
var ticker;
function startTimer(secs){
timeInSecs = parseInt(secs)-1;
ticker = setInterval("tick()",1000);   // every second
}
function tick() {
var secs = timeInSecs;
if (secs>0) {
timeInSecs--;
}
else {
clearInterval(ticker); // stop counting at zero
// startTimer(60);  // remove forward slashes in front of startTimer to repeat if required
}
document.getElementById("countdown").innerHTML = secs;
}
startTimer(60);  // 60 seconds


// this activates the start button to begin the game and brings up the trivia game
$("#getStarted").click(function(){
$("#imgContainer").hide();
$("#questionContainer").show();
event.preventDefault();
});
//  code for the button that hides the trivia game and shows the game summary page
$("#showScore").click(function(){
$("#questionContainer").hide();
$("#gameSummaryContainer").show();
event.preventDefault();

// this sets variables for the game

var playerRightAnswers = 0;
var playerWrongAnswers = 0;
var correctAnswers = ["radio1", "radio6", "radio7", "radio11", "radio13"];
var playerAnswers = [];
for (var i = 0; i < 16; i++) {
// var scoringID = "#radio" + i + ":checked";
// if ($(scoringID).checked()) {
//   playerAnswers.push(scoringID);
// // }
var id = $("#radio" + i + ":checked").attr("id");
if(id != null){
console.log(id);
playerAnswers.push(id);
console.log(playerAnswers);
}
}
// this tallies the player's total right/wrong score
for (var j = 0; j < 6; j++) {
if (playerAnswers[j] == correctAnswers[j]){
playerRightAnswers = playerRightAnswers + 1;
}
else {
playerWrongAnswers =  playerWrongAnswers + 1;
}
console.log(playerRightAnswers);
console.log(playerWrongAnswers);
$("#playerRightAnswers").text(playerRightAnswers);
$("#playerWrongAnswers").text(playerWrongAnswers);
}
});
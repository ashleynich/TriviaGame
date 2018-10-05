//initiate music
// audio.play();
function myFunction() {
    var x = document.getElementById("myAudio").autoplay;
    document.getElementById("demo").innerHTML = x;
}

//initiate timer on page load
var timer2 = "1:00";
var interval = setInterval(function() {


  var timer = timer2.split(':');
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $('.countdown').html(minutes + ':' + seconds);
  timer2 = minutes + ':' + seconds;
}, 1000);

function timeUp () {

    if (timer2 === 0) {
        alert("Time's Up!");
        alert("Correct Responses: " + amountCorrect);

    }

}


//alet when time is up (/show score when timer is up)




//quiz answers: assign input-radio to each answer 
//assign value to each answer, correct answer being 1, incorrect being 0
//store answers
//grade quiz
//check for correct answers
//create if/else if/else to check for correct (1), incorrect (0) and unaswered questions
//display score when submit button is clicked OR/AND when timer runs out

function handleClick()
  {         
var amountCorrect = 0;          
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    }
  }
 }                   
    alert("Correct Responses: " + amountCorrect);
  }

  function timeUp () {

    if (timer2 === 0) {
        alert("Time's Up!");
        alert("Correct Responses: " + amountCorrect);

    }

}

//ran out of time/couldn't figure how to connect the timer with the submit button so that when a user finishes the game, 
//the timer stops & when user runs out of time, game automatically stops and alerts score







 


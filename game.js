var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;
var count = 0;

function checkAnswer(currentLevel) {
   if(gamePattern[count] == userClickedPattern[count]){
        count++;
        if(count==currentLevel){
            count = 0;
            userClickedPattern = [];
            $("#level-title").text("CORRECT!!");
            nextSequence();
        }
    
    }else if(gamePattern[count] != userClickedPattern[count]){
        count = 0;
        gameStarted = false;
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        $("#level-title").text("wrong! game over!");
        setTimeout(() => {
            $("#level-title").text("Press any Key to Start");
        }, 2500);
    }
}
$(document).keypress(function (e) { 
    if(!gameStarted){
        nextSequence();
        gameStarted = true;
    }
    
});

$(".btn").click(function (e) { 
    if (gameStarted) {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatedPress(userChosenColour);
        checkAnswer(level);
    }
    

});

function nextSequence() {
    setTimeout(() => {
        $("#level-title").text("level "+(level++));
        var randomNumber = Math.floor(Math.random()*4);
       
        var randomChosenColour = buttonColours[randomNumber];
       
        gamePattern.push(randomChosenColour);
    
        playSound(randomChosenColour);
        animatedPress(randomChosenColour); 
    }, 2500);

} 

function animatedPress(currentColour) {
    $("#"+currentColour).toggleClass("pressed");
    setTimeout(() => {
        $("#"+currentColour).toggleClass("pressed");
    }, 150);
}

function playSound(name) {
   var newSound = new Audio("./sounds/"+name+".mp3");
   newSound.play();
}


   
    
































    

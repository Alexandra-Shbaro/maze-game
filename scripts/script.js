// extra comments are for the sake of me rooting the concepts after studying them to apply them.sorry if they are a lot

// defining constants (using consts to not override the values)
const start = document.getElementById('start'); 
const end = document.getElementById ('end');
const boundaries =document.querySelectorAll('.boundary');
const statusDisplay= document.getElementById('status'); // to change when user wins or loses

// game status 
let gameStatus=false; 

//eventlistner for start to tell user the game started and change status of game to true (a function in js that waits for event to occur then responds to it)
start.addEventListener("mouseover", () => {
  gameStatus=true;
  statusDisplay.textContent="Game Started";
});

// () => is for each

//eventlistner if user lost and hit a boundary 
boundaries.forEach(boundary => {// used boundary => for the script to apply the function to each class="boundary" it finds in the nodelist boundaries 
  boundary.addEventListener("mouseover", () => {
    if(gameStatus){
      statusDisplay.textContent="You lose";
      gameStarted=false;
    }
  });
});

//used "mouseover" instead of "onmouseover" because it can be overwritten. since i want to use it again to determine if the game is won or lost i used mouseover

//eventlistner if user won and reached the end
end.addEventListener("mouseover",function(){
  if (gameStatus){
    statusDisplay.textContent="You won";
    gamestarted=false;
  }
});

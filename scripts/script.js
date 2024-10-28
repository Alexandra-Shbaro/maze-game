const start = document.getElementById('start'); 
const end = document.getElementById ('end');
const boundaries =document.querySelectorAll('.boundary');
const statusDisplay= document.getElementById('status'); 

let gameStatus=false; 

start.addEventListener("mouseover", () => {
  gameStatus=true;
  statusDisplay.textContent="Game Started";
});

boundaries.forEach(boundary => {
  boundary.addEventListener("mouseover", () => {
    if(gameStatus){
      statusDisplay.textContent="You lose";
      gameStarted=false;
    }
  });
});

end.addEventListener("mouseover",function(){
  if (gameStatus){
    statusDisplay.textContent="You won";
    gamestarted=false;
  }
});

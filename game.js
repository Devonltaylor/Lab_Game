var grantLives = 10;
var playerLives = 40;

var choice = prompt("Do you want to play a game against the Almighty Grant?");
var randNum = Math.floor(Math.random () * 2) + 1;
var count = 0;


  if (choice === "yes") {
    var username = prompt("What is your name?");
    console.log("Let's Play!");
    while (grantLives > 0 && playerLives > 0) {
      if (grantLives > 0) {
        grantLives -= (Math.floor(Math.random() * 2) + 1);
        console.log("Grant's score is " + grantLives);
      }
      if (playerLives > 0) {
      playerLives -= (Math.floor(Math.random() * 2) + 1);
      console.log(username + " score is " + playerLives);
      }
      if (grantLives <= 0) {
      console.log("You Won!");
      grantLives += 10;
      count ++;
      } else if (playerLives <= 0) {
        console.log("Sorry you lose!");
      }
    }
  }

if (choice !== "yes") {
  console.log("Come back when your ready!");
}

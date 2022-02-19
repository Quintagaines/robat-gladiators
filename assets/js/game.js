var playName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
// You can also log multiple values at once like this 

console.log (playName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");


//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack
console.log(
    playName + "attacked" + enemyName + ". "+" now has " + enemyHealth + "health remaining."
)

  // Log a resulting message to the console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.
};

fight();
function displayTitle() {
    "use strict";
    window.alert("Welcome to the Rock, Paper, Scissors Game!");
}

function playGame() {
    "use strict";
    // Get a random number between 0 & 9
    var computerChoice = Math.floor(Math.random() * 10);
    var choice;
    if(computerChoice >= 0 && computerChoice <= 2)
    {
        computerChoice = "Rock";
    }
    else if(computerChoice >= 3 && computerChoice <= 5)
    {
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }
    do {
         choice = window.prompt("What do you choose: Rock, Scissors or Paper?").toUpperCase();
       
          if (choice !== "ROCK" && choice !== "SCISSORS" && choice !== "PAPER") {
                window.alert("Your choise was input incorrect. You should input one of the following: Rock, Scissors or Paper"); 
            } 
        } while (choice !== "ROCK" && choice !== "SCISSORS" && choice !== "PAPER");

    if (computerChoice == "Rock") {
        //Result is Rocks

        if (choice == "ROCK") {
            window.alert("It's a draw.");
        } else if (choice == "PAPER") {
            window.alert("You win!. Computer chose rock and you chose paper!");
        } else if (choice == "SCISSORS") {
            window.alert("You lose. Computer chose rock and you chose scissors.");
        } else {
            window.alert("Invalid choice enter valid choice.");
        }
    } else if (computerChoice == "Paper") {
        //Result is Paper
        if (choice == "PAPER") {
            window.alert("It's a draw.");
        } else if (choice == "SCISSORS") {
            window.alert("You win!.Computer chose paper and you chode scissors");
        } else if (choice == "ROCK") {
            window.alert("You lose.Computer chose paper and you chose rock.");
        } else {
            window.alert("Invalid choice enter valid choice");
        }
    } else {
        // Result is Scissors

        if (choice == "SCISSORS") {
            window.alert("It's a draw.");
        } else if (choice == "ROCK") {
            window.alert("You win!.Computer chose scissors and you chose rock.");
        } else if (choice == "PAPER") {
            window.alert("You lose.Computer chose scissors and you chose paper");
        } else {
            window.alert("Invalid choice enter valid choice");
        }
    }
}

function main() {
    "use strict";
    displayTitle();
    var playagain = "y";
    while (playagain === "y") {
        playGame();
        playagain = window.prompt("Do you want to play again (y/n)?");
    }
    window.alert("Thanks for playing!");
}

main();
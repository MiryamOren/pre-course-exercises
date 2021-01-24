var readlineSync = require('readline-sync');
var suits =["♠","♥","♦","♣"];

// starting
console.log("//////--------- Welcome to WAR ---------\\\\\\");
var name = (readlineSync.question("please enter your name: ")).toString();
var playersMoney = 50;

// round
while (playersMoney > 0)
{
    // bet - asking
    console.log("Hello " + name + ", you currently have " + playersMoney + " dollars")
    var bet = parseFloat(readlineSync.question("place your bet for the next round: 1 to " + playersMoney + "\n"));

    // bet - validity check
    if (!Number.isInteger(bet) || (bet < 1) || (bet > playersMoney))
    {
        console.log("Game Over: only numbers between 1 to " + playersMoney + " should be entered ");
        break;
    }

    //  randomizing cards
    var playersCard = Math.floor((Math.random() * 12) + 1);
    var playersSuit = suits[Math.floor(Math.random() * 3)];
    var computersCard = Math.floor((Math.random() * 12) + 1);
    var computersSuit = suits[Math.floor(Math.random() * 3)];
    console.log("Your card is " + playersCard + playersSuit +
    " And my card is " + computersCard + computersSuit);

    // The player won
    if (playersCard > computersCard)
    {
        playersMoney = playersMoney + bet;
        console.log("You won " + bet + " dollars! and now you have " + playersMoney + " dollars")
    }
    // The computer won
    else if (playersCard < computersCard)
    {
        playersMoney = playersMoney - bet;
        console.log("You lost " + bet + " dollars and now you have " + playersMoney + " dollars");
        if (playersMoney == 0)
        {
            console.log("Game Over");
            break;
        }
    }
    // draw
    else if (playersCard == computersCard)
    {
        console.log("Draw! Let's try another round")
        continue;
    }
 
    var anotherRound = parseFloat((readlineSync.question("\nWhat would you like to do?" + 
    "\n1. play another round\n2. Leave with my money :)\n")));

    // validity check
    if (anotherRound!=1 & anotherRound!=2) 
    {
        throw("Error: Only 1 or 2 should be entered");
    }

    if (anotherRound == 2)
    {
        console.log("You achieved " + playersMoney + " dollars! bye!");
        break;
    }
}

var words = 
[
    "horse",
    "door",
    "song",
    "trip",
    "backbone",
    "bomb",
    "round",
    "treasure",
    "garbage",
    "park",
    "pirate",
    "ski",
    "state",
    "whistle",
    "palace",
    "baseball",
    "coal",
    "queen",
    "dominoes",
    "photograph",
    "computer",
    "hockey",
    "aircraft",
    "hot",
    "dog",
    "salt",
    "pepper",
    "key",
    "iPad",
    "whisk",
    "frog",
    "lawnmower",
    "mattress",
    "pinwheel",
    "cake",
    "circus",
    "battery",
    "mailman",
    "cowboy",
    "password",
    "bicycle",
    "skate" ,
    "electricity",
    "lightsaber",
    "thief",
    "teapot",
    "deep",
    "spring",
    "nature",
    "shallow",
    "toast",
    "outside",
    "America",
    "roller",
    "blading",
    "gingerbread",
    "man",
    "bowtie",
    "half",
    "spare",
    "wax",
    "light", 
    "bulb", 
    "platypus", 
    "music"
];
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopkrstuvwxyz";

var figlet = require('figlet');
var readlineSync = require('readline-sync');

function multiString(string, num)
{
    var res = "";
    var i;
    for (i = 0; i < num; i++)
    {
        res = res + string;
    }
    return res;
}

function findIndexes(string, letter)
{
    indexes = [];
    var i;
    for (i = 0; i < string.length; i++)
    {
        if (string[i] == letter)
        {
            indexes.push(i)
        }
    }
    return indexes;
}

function replace(string, letter, indexes)
{
    var newStr = "";
        var i;
        for (i = 0; i < string.length; i++)
        {
            if (indexes.includes(i))
            {
                newStr = newStr + letter;
            }
            else
            {
                newStr = newStr + string[i]
            }
        }

        return newStr;
}

// Welcome message
console.log(figlet.textSync("HANGMAN", {font: 'Standard'}));

// starting
console.log("Welcome to hangman!");
var word = words[Math.floor(Math.random() * words.length)];
var pattern = multiString("*", word.length);
var attemptsLeft = 10;
var wrongGuesses = [];
var fail = true;

// Each round of the loop is one turn
while (attemptsLeft > 0)
{
    console.log("\nWord: " + pattern + "\nYou have " + attemptsLeft + " guesses");
    if (wrongGuesses.length)
    {
        console.log("wrong guesses: " + wrongGuesses);
    }
    var guess = (readlineSync.question("Enter your guess: "));

    // validity check
    if (guess.length!=1 || !letters.includes(guess) || wrongGuesses.includes(guess))
    {
        console.log("Invalid guess. Try again");
        continue;
    }

    // Checks if the guess is correct
    var indexes = findIndexes(word, guess.toLowerCase());
    if (indexes.length)
    {
        pattern = replace(pattern, guess.toLowerCase(), indexes);
        // Checks if the player has won
        if (pattern == word)
        {
            console.log("\nCongratulations! You won! \nWord: " + pattern);
            fail = false;
            break;
        }
        console.log("Very nice:) Keep guessing");
    }
    else
    {
        wrongGuesses.push(guess.toLowerCase());
        attemptsLeft = attemptsLeft - 1;
        console.log("Wrong guess. Try again");
    }    
}

if (fail)
{
    console.log("\nGame Over. \nThe word was: " + word)
}

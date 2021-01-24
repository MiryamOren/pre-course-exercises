var words = // len = 207
[
    "horse","door","song","trip","backbone","bomb","round","treasure","garbage","park",
    "pirate","ski","state","whistle","palace","baseball","coal","queen","dominoes",
    "photograph","computer","hockey","aircraft","hot","dog","salt","pepper","key",
    "whisk","frog","lawnmower","mattress","pinwheel","cake","circus","battery","mailman",
    "cowboy","password","bicycle","skate","electricity","lightsaber","thief","teapot","deep",
    "spring","nature","shallow","toast","outside","america","roller","blading","gingerbread",
    "man","bowtie","half","spare","wax","light","bulb","platypus","music","sailboat",
    "popsicle","brain","birthday","cake","skirt","knee","pineapple","tusk","sprinkler",
    "money","spool","lighthouse","doormat","face", "flute","rug","snowball","purse","owl",
    "gate","suitcase","stomach","doghouse","pajamas","bathroom","scale","peach","newspaper","watering",
    "can","hook","school","beaver","french","fries","beehive","beach","artist","flagpole","camera",
    "hair","dryer","mushroom","toe","pretzel","quilt","chalk","dollar","soda",
    "chin","swing","garden","ticket","boot","cello","rain","clam","pelican","stingray",
    "fur","blowfish","rainbow","happy","Pictionary","fist","base","storm","mitten","easel",
    "nail","sheep","stoplight","coconut","crib","hippopotamus","ring","seesaw","plate","fishing",
    "pole","hopscotch","bell","pepper","front","porch","cheek","video","camera","washing",
    "machine","telephone","silverware","barn","snowflake","bib","flashlight","popsicle","muffin",
    "sunflower","skirt","top","hat","swimming","pool","tusk","radish","peanut","spool",
    "poodle","potato","face", "shark","fang","snowball","waist","spoon","gate",
    "bottle","mail","sheep","lobster","ice","crib","lawn","mower","bubble","seesaw","pencil",
    "cheeseburger","hopscotch","rocking","chair","corner","cheek","rolly","polly","popcorn",
    "telephone","seahorse","snowflake","spine","desk"
];   

var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

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

function isWord(string)
{
    var i;
    for (i = 0; i < string.length; i++)
    {
        if (!letters.includes(string[i]))
        {
            return false;
        }
    }

    return true;
}

function matchPattern(str,pattern)
{
    var i;
    for (i = 0; i < pattern.length; i++)
    {
        if ((pattern[i] != "*") & (pattern[i] != str[i].toLowerCase()))
        {
            return false
        }
    }
    return true
}

// Welcome message
console.log(figlet.textSync("HANGMAN", {font: 'Standard'}));
console.log("Welcome to hangman!");

// starting
var word = words[Math.floor(Math.random() * words.length)];
var pattern = multiString("*", word.length);
var attemptsLeft = 10;
var wrongLetters = [];
var wrongWords = [];
var fail = true;

// Each round of the loop is one turn
while (attemptsLeft > 0)
{
    console.log("\nWord: " + pattern + "\nYou have " + attemptsLeft + " guesses");
    if (wrongLetters.length || wrongWords.length)
    {
        console.log("wrong guesses: \n letters: " + wrongLetters + "\n words:" + wrongWords);
    }
    var answers = ["Guess a letter", "Guess the word"];
    var guessKind = (readlineSync.keyInSelect(answers, "what would you like to do?: "));

    if (guessKind == -1)
    {
        break;
    }

    var guess = (readlineSync.question("Enter your guess: "));

    // letter
    if (guessKind == 0)
    {
        // validity check
        if (guess.length!=1 || !letters.includes(guess))
        {
            console.log("Invalid guess. Try again");
            continue;
        }
        else
        {
            guess = guess.toLowerCase();
        }
        if (pattern.includes(guess) || wrongLetters.includes(guess))
        {
            console.log("You have already tried this guess before. Enter something else");
            continue;
        }
    
        // Checks if the guess is correct
        var indexes = findIndexes(word, guess);
        if (indexes.length)
        {
            pattern = replace(pattern, guess, indexes);
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
            wrongLetters.push(guess);
            attemptsLeft = attemptsLeft - 1;
            console.log("Wrong guess");
        }   
    }

    // word
    else if (guessKind == 1)
    {
        //validity check
        if (guess.length != word.length || !isWord(guess) || !matchPattern(guess, pattern))
        {
            console.log("Invalid guess. Try again");
            continue;
        }
        else
        {
            guess = guess.toLowerCase();
        }
        if (wrongWords.includes(guess))
        {
            console.log("You have already tried this guess before. Enter something else");
            continue;
        }
        // Checks if the guess is correct
        if (guess == word)
        {
            console.log("\nCongratulations! You won! \nWord: " + word);
            fail = false;
            break;
        }
        else
        {
            wrongWords.push(guess);
            attemptsLeft = attemptsLeft - 1;
            console.log("Wrong guess");
        }
    }
}

if (fail)
{
    console.log("\nGame Over. \nThe word was: " + word)
}

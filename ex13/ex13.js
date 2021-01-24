var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopkrstuvwxyz"

var readlineSync = require('readline-sync');
var string = (readlineSync.question("please enter a string ")).toString();

if (string == "")
{
    throw("Error: No sentence has been entered")
}

var arr = string.split(" ");

var longest_word_length = 0;
var longest_word_index = -1;

var i;
for (i = 0; i < arr.length; i++)
{
    var word = arr[i]
    if (word.length > longest_word_length)
    {
        // check if there is numbers or symbols in the word
        var j;
        for (j = 0; j < word.length; j++)
        {
            if (!letters.includes(word[j]))
            {
                word = false;
                break;
            } 
        }
        if (word)
        {
            longest_word_length = arr[i].length;
            longest_word_index = i;
        }
    }
}

if (longest_word_index == -1)
{
    throw("Error: no word has been enterd")
}
console.log(arr[longest_word_index]);


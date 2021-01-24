var readlineSync = require('readline-sync');
var string = (readlineSync.question("please enter a string ")).toString();

var res = true;
for(i = 0; i < (string.length / 2); i++)
{
    if (string[i] != string[string.length-1-i])
    {
        res = false;
        break;
    }
}

console.log(res);
var readlineSync = require('readline-sync');
var string = (readlineSync.question("please enter a string ")).toString();

var res ="";
var i;
for(i = 0; i < string.length; i++)
{
    if (string[i] == " ")
    {
        res = res + "*";
    }
    else
    {
        res = res + string[i];
    }
}

console.log(res);


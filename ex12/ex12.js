var readlineSync = require('readline-sync');
var string = (readlineSync.question("please enter a string ")).toString();

var res ="";
var i;
for (i = 0; i < string.length; i++)
{
    if ("aeiouy".includes(string[i]))
    {
        res = res + string[i].toUpperCase();
    }
    else
    {
        res = res + string[i];
    }
}

console.log(res);


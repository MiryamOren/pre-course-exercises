var readlineSync = require('readline-sync');
var num = parseFloat(readlineSync.question("please choose a positive integer number "));

// validity check
if (!Number.isInteger(num) || (num < 1))
{
    console.log("Error: only positive integer numbers should be entered ");
}
else
{
    var i;
    for(i = (num - 1); i > 1; i--)
    {
        num = num * i;
    }

    console.log(num);
}
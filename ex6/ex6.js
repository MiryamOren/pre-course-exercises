var readlineSync = require('readline-sync');
var num = readlineSync.question("please choose a number larger than 10 ");

while (true) 
{
    if (isNaN(num))
    {
        num = readlineSync.question("please choose a NUMBER larger than 10 ");
    }
    else if(parseFloat(num) < 10)
    {
        num = readlineSync.question("please choose a number LARGER than 10 ");
    }
    else
    {
        break;
    }    
}

console.log("thank you");
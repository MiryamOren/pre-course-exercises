//
var readlineSync = require('readline-sync');
function ten(num1, num2)
{
    if ((num1 + num2) == 10)
    {
        console.log("makes 10");
    }
    else
    {
        console.log("nope");
    }
};

// get the numbers from the user
var readlineSync = require('readline-sync');
var num1 = readlineSync.question("please enter a number ");
var num2 = readlineSync.question("please enter another number ");
// validity check
if (isNaN(num1) || isNaN(num2))
{
    console.log("Error: Only numbers should be entered");
}
else
{
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    ten(num1, num2);
}


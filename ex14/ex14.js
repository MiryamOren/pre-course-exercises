var readlineSync = require('readline-sync');
var num = parseFloat(readlineSync.question("please enter a number "));

// validity check
if (!Number.isInteger(num) || (num < 1))
{
    throw("Error: only positive integer numbers should be entered ");
}

// creating the array
var i;
var arr = [];
for (i = 0; i < num; i++)
{
    var rnd = Math.floor((Math.random() * 50) + 1);
    arr.push(rnd);
}

//finding min and max
var min = arr[0];
var max = arr[0];

for (i = 0; i < num; i++)
{
    if (arr[i] < min)
    {
        min = arr[i];
    }
    if (arr[i] > max)
    {
        max = arr[i];
    }
}

console.log("min is: " + min + "\nmax is: " + max)
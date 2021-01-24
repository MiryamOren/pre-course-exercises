function range(min, max)
{
    var array =[];
    var i;
    for (i = min; i <= max; i++)
    {
        array.push(i);
    }

    return(array);
}

var readlineSync = require('readline-sync');
var num = parseFloat(readlineSync.question("please choose a positive integer number "));

// validity check
if (!Number.isInteger(num) || (num < 1))
{
    console.log("Error: only positive integer numbers should be entered ");
}
else
{
    var primes = range(2, num);
    var i;
    for (i = 0; primes[i] < Math.sqrt(num); i++)
    {
        if (primes[i])
        {
            var j;
            for (j = Math.pow(primes[i], 2); j < num + 1; j = j + primes[i])
            {
                primes[j-2] = 0;
            }
        }
    }

    for (i = 0; i < num; i++)
    {
        if(primes[i])
        {
            console.log(primes[i])          
        }
    }
}
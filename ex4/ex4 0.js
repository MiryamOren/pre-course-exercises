var readlineSync = require('readline-sync');

// get info from user
var numOfPeole = readlineSync.question("How many people are you going with? ");
var kosher = readlineSync.question("Should it be Kosher? (y/n question) ");
var mehadrin = "n";
if (kosher == "y") 
{
    var mehadrin = readlineSync.question("should it be Kashrut Lemehadrin? (y/n question) ");
}
var kinds = ['Dairy food', 'Meat restaurant', 'Asian food'];
var index = readlineSync.keyInSelect(kinds, 'What kind of food do you want?');

// validity check
if (
    (isNaN(numOfPeole)) ||
    (isNaN(index)) ||
    (!isNaN(kosher)) ||
    (!isNaN(mehadrin)) ||
    (index == "-1")
    )
{
    throw("Error: One of the details you entered is incorrect");
}
else
{
    numOfPeole = parseInt(numOfPeole);
    index = parseInt(index);
}

// find the matching restaurant
var restaurant; 

//kosher
if (kosher == "y")
{
    //mehadrin
    if (mehadrin == "y"){
        if (index == 0)
        {
            if (numOfPeole <= 10)
            {
                restaurant = "Napoli";
            }
            else
            {
                restaurant = "Cafe cafe";
            }
        }
        else if (index == 1)
        {
            if (numOfPeole <= 10)
            {
                restaurant = "Vesavata u'berchta";
            }
            else{
                restaurant = "Lechem Basar";
            }
        }
        else if (index == 2)
        {
            restaurant = "Oshi Oshi";
        }
        
    }
    //kosher but not mehadrin
    else
    {
        if (index == 0)
        {
            if (numOfPeole <= 50)
            {
                restaurant = "Spagos";
            }
            else
            {
                restaurant = "Cafe cafe";
            }
        }
        else if (index == 1)
        {
            restaurant = "Goshen";
        }
        else if (index == 2)
        {
            if (numOfPeole <= 10)
            {
                restaurant = "Nini Hachi";
            }
            else
            {
                restaurant = "River";
            }
        }

    }

}
// not kosher
else
{
    if (index == 0)
    {
        if (numOfPeole <= 10)
        {
            restaurant = "GUSTO";
        }
        else
        {
            restaurant = "Joya";
        }
    }
    else if (index == 1)
    {
        if (numOfPeole <= 10)
        {
            restaurant = "Porter and Sons";
        }
        else
        {
            restaurant = "Claro";
        }
    }
    else if (index == 2)
    {
        if (numOfPeole <= 50)
        {
            restaurant = "KHUA";
        }
        else
        {
            restaurant = "Tyo";
        }
    }

}

console.log("I recommend you to eat at " +restaurant + " restaurant, enjoy :)")
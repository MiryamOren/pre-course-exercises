var readlineSync = require('readline-sync');

// get info from user
var numOfPeole = parseFloat(readlineSync.question("How many people are you going with? "));
//validity check
if (!Number.isInteger(numOfPeole) || (numOfPeole < 1))
{
    throw("Error: Only positive integer numbers should be entered");
}
var kosher = readlineSync.question("Should it be Kosher? (y/n question) ");
//validity check
if (kosher != "n" & kosher!="y")
{
    throw("Error: This is a y/n question ");
}
var mehadrin = "n";
if (kosher == "y") 
{
    var mehadrin = readlineSync.question("should it be Kashrut Lemehadrin? (y/n question) ");
    //validity check
    if (mehadrin != "n" & mehadrin!="y")
    {
        throw("Error: This is a y/n question ");
    }
}
var kinds = ['Dairy food', 'Meat restaurant', 'Asian food'];
var index = parseInt(readlineSync.keyInSelect(kinds, 'What kind of food do you want?'));
//validity check
if (index == "-1")
{
    throw("Error: You should chose the kind of the food");
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
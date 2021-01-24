var readlineSync = require('readline-sync');

function findIndex(array, element)
{
    var res = [];
    var i;
    for (i = 0; i < array.length; i ++)
    {
        if (array[i] == element)
        {
            res.push(i);
        }
    }
    return res;
}

var motto = new Map([
    [0, "Their daring, nerve and chivalry set them apart"] ,
    [1, "They will help you on your way to greatness"],
    [2, "Wit beyond measure is man's greatest treasure"],
    [3, "They are patient, true and unafraid of toil"],

]);

var houseName = new Map([
    [0, "Gryffindor"] ,
    [1, "Slytherin"],
    [2, "Ravenclaw"],
    [3, "Hufflepuff"],

]);

var hogwartsHouses = [0, 0, 0, 0];

var answers = 
[
    // 0 Gryffindor Slytherin Ravenclaw Hufflepuff
    ['The Great', 'The Bold', 'The Wise', 'The Good'],
    // 1 Slytherin Ravenclaw Hufflepuff Gryffindor 
    ['Green','Blue', 'Yellow', 'Red'],
    // 2 Ravenclaw Hufflepuff Gryffindor Slytherin 
    ['take food from your pack and distract the creature with it while running in the other direction',
    'tug your friends to run together',
    'search for anything that can be used as a weapon and stay in the back',
    'run away as fast as possible'],
    // 3 Hufflepuff Gryffindor Slytherin Ravenclaw
    ['pygmy puff', 'dragon', 'basilisk', 'phoenix'],
    // 4 Gryffindor Slytherin Ravenclaw Hufflepuff
    ['the Forbidden Forest', 'the lake', 'the library', 'greenhouses'],
    // 5 Slytherin Ravenclaw Hufflepuff Gryffindor 
    ['student council', 'debate club', 'environmental activities', 'sports'],
    // 6 Ravenclaw Hufflepuff Gryffindor Slytherin 
    ['Seeker', ' Keeper', 'Chaser', 'Beater'],
    // 7 Hufflepuff Gryffindor Slytherin Ravenclaw
    ['my few friends are like a family to me',
    'I have several good friends who support me in my ups and downs',
    'I keep in touch with people useful to me',
    'I connect with people mostly by learning together'],
    // 8 Gryffindor Slytherin Ravenclaw Hufflepuff
    ['Bermuda Triangle', 'the identity of Jack the Ripper', 'Voynich Manuscript', 'the Hanging Gardens of Babylon']
];

var questions = 
[
    // 0
    'How would you like to be known to history?',
    // 1
    'Which color do you love the most?',
    // 2
    'When traveling with friends, you are met with a ferrous creature ready to attack you. What would you do?',
    // 3
    'What magical creature fascinates you the most?',
    // 4
    'In your first year, what part of Hogwarts would you explore first?',
    // 5
    'Choose an extracurricular activity',
    // 6
    'Who are you on a Quidditch field?',
    // 7
    'Describe your relationships with friends',
    // 8
    'What mystery intrigues you the most?'
]

console.log('Which Harry Potter Hogwarts House Do You Belong To - quiz\n');

var i;
for (i = 0; i <= 8; i++)
{
    console.log("loop of the questions, i = " + i +"\n");
    var index = readlineSync.keyInSelect(answers[i], questions[i])
    hogwartsHouses[(parseInt(index) + i) % 4] += 1;
}

console.log(hogwartsHouses);

// tiebreaker
var houseIndex;
var draw = true;
for (i = 0; i <= 3; i++)
{
    if (hogwartsHouses[i] >= 5){
        draw = false;
        houseIndex = i;
        console.log("there's no drew5\n the winner is " + houseIndex +"\n");
        break
    }
}
if (draw)
{
    if (hogwartsHouses.includes(4))
    {
        var indexes = findIndex(hogwartsHouses, 4);
        if (indexes.length == 1)
        {
            draw = false;
            houseIndex = indexes[0];
            console.log("there's no drew4\n the winner is " + houseIndex +"\n");
        }
        else
        {
            houseIndex = indexes;
            console.log("there's drew of 4\n the indexes is " + houseIndex +"\n");
        }

    }
    else if (hogwartsHouses.includes(3))
    {
        var indexes = findIndex(hogwartsHouses, 3);
        if (indexes.length == 1)
        {
            draw = false;
            houseIndex = indexes[0];
            console.log("there's no drew3\n the winner is " + houseIndex +"\n");
        }
        else
        {
            houseIndex = indexes;
            console.log("there's drew of 3\n the indexes is " + houseIndex +"\n");
        }
    }
}

if (draw)
{
    var tiebreaker = []
    var i;
    for (i = 0; i < houseIndex.length; i++) 
    {
        tiebreaker.push(houseName.get(houseIndex[i]))
    }
    var index = readlineSync.keyInSelect(tiebreaker, 'Which house do you wish to be in?')
    houseIndex = houseIndex[index];
}

console.log("\n" + motto.get(houseIndex) + "\nWellcome to " + houseName.get(houseIndex) + "!");





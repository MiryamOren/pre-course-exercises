var readlineSync = require('readline-sync');

var myMap = new Map([
    [0, "ZERO"],
    [1, "ONE"],
    [2, "TWO"],
    [3, "THREE"],
    [4, "FOUR"],
    [5, "FIVE"],
    [6, "SIX"],
    [7, "SEVEN"],
    [8, "EIGHT"],
    [9, "NINE"],
]);
var num = parseInt(readlineSync.question("please enter a number "));
console.log(myMap.get(num));

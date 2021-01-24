var i;
for (i = 1; i <= 100; i++){
    var print = i;
    //divisible by 7
    if (i%7 == 0)
    {
        print = "BOOM";
    }
    //has the digit 7
    if((i.toString()).includes("7"))
    {
        print = "BOOM";
    }
    console.log(print);  
}

var i;
for (i = 1, j = 1, k = 1; i <= 100; i++, j++, k++){
    var print = i;
    //divisible by 7
    if (j==7)
    {
        print = "BOOM";
        j = 0;
    }
    //has the digit 7
    if(k==7)
    {
        print = "BOOM";
        k = -3;
    }
    console.log(print);  
}

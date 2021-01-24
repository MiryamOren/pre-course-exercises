function joinArrays(arr1, arr2){
    var res = []

    var i;
    for (i = 0; i < arr1.length; i++)
    {
        res.push(arr1[i]);
    }
    for (i = 0; i < arr2.length; i++)
    {
        res.push(arr2[i]);
    }

    return res;
}
function reverseArr(arr)
{
    var len = arr.length;
    var i;
    for (i = 0; i < Math.floor(len / 2); i++)
    {
        var temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }

    return arr;
}

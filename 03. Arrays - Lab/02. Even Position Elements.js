function foundEvenN(arr)
{
    let result = "";
    for (var i = 0; i < arr.length; i++)
    {
        if (i % 2 == 0)
        {
            result += arr[i] + " ";
        }
    }

    console.log(result);
}

foundEvenN(['20', '30', '40']);


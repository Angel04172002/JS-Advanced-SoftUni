function negativePositiveNumbers(arr)
{
    let newArray = []

    for(let element of arr)
    {
        if(element < 0)
        {
            newArray.unshift(element)
            continue
        }
        
        newArray.push(element)
    }

    console.log(newArray.join("\n"))
}

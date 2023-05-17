function sameNumbers(num)
{
    let numsArray = num.toString().split("").map(Number)

    let firstDigit = numsArray[0]
    let sum = firstDigit
    let isSame = true

    for(let i = 1; i < numsArray.length; i++)
    {
        let currentDigit = numsArray[i]

        if(firstDigit !== currentDigit)
        {
            isSame = false
        }

        sum += currentDigit
    }

    console.log(isSame)
    console.log(sum)
}

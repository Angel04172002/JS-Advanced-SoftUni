function biggestElement(matrix)
{
    let biggestNumber = matrix[0][0]

    for(let i = 0; i < matrix.length; i++)
    {
        for(let k = 0; k < matrix[i].length; k++)
        {
            if(biggestNumber < matrix[i][k])
            {
                biggestNumber = matrix[i][k]
            }
        }
    }

    return biggestNumber
}

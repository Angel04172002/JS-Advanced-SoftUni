function equalNeighbours(matrix)
{
    let pairs = 0

    for(let i = 0; i < matrix.length; i++)
    {
        for(let k = 0; k < matrix[i].length; k++)
        {
            if(i - 1 >= 0 && matrix[i][k] === matrix[i - 1][k])
            {
                pairs++
            }

            if(k - 1 >= 0 && matrix[i][k] === matrix[i][k - 1])
            {
                pairs++
            }
        }
    }

    return pairs
}

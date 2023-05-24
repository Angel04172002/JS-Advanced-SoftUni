function diagonalSums(matrix)
{
    let primaryDiagonalSum = 0
    let secondaryDiagonalSum = 0

    for(let i = 0; i < matrix.length; i++)
    {
        primaryDiagonalSum += matrix[i][i]
        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i]
    }

    let output = `${primaryDiagonalSum} ${secondaryDiagonalSum}`
    return output
}

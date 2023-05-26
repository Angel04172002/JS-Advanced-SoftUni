function diagonalAttack(input)
{  

    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(" "));
        }
    }

    let matrix = []

    let mainDiagonalSum = 0
    let secondaryDiagonalSum = 0

    for(let i = 0; i < input.length; i++)
    {
        matrix[i] = input[i].split(" ").map(Number)
    }

    for(let i = 0; i < matrix.length; i++)
    {
        mainDiagonalSum += matrix[i][i]
        secondaryDiagonalSum += matrix[matrix.length - 1 - i][i]
    }

    if(mainDiagonalSum !== secondaryDiagonalSum)
    {
        printMatrix(matrix)
        return
    }


    for(let i = 0; i < matrix.length; i++)
    {
        for(let k = 0; k < matrix.length; k++)
        {
            if(i != k && i != matrix.length - 1 - k)
            {
                matrix[i][k] = mainDiagonalSum
            }
        }
    } 

    printMatrix(matrix)
}

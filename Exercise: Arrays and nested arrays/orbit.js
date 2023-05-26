function orbit([width, height, x, y])
{
    let matrix = new Array(width).fill().map(() => new Array(height).fill(0));

    for(let row = 0; row < width; row++)
    {
        for(let col = 0; col < height; col++)
        {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    for(let i = 0; i < width; i++)
    {
        console.log(matrix[i].join(" "))
    }
}

orbit([4, 4, 0, 0])

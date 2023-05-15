function squareOfStars(size = 5)
{
    let row = "";

    for(let i = 0; i < size; i++)
    {
        for(let k = 0; k < size; k++)
        {
            row += "* ";
        }

        console.log(row);
        row = "";
    }
}

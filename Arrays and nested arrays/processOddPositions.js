function processOddPositions(arr)
{
    let output = arr.filter((x, i) => i % 2 == 1)
                    .map(x => x * 2)
                    .reverse()
                    .join(" ")

    return output
}

function sortingNumbers(arr)
{
    let orderedNumbers = [...arr].sort((a,b) => a - b)

    let output = []

    while(orderedNumbers.length > 0)
    {
        let min = orderedNumbers.shift()
        let max = orderedNumbers.pop()

        output.push(min, max)
    }

    return output
}

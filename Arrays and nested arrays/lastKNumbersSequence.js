function lastKNumbersSequence(n, k)
{
    let numbers = [1]

    for(let i = 0; i < n - 1; i++)
    {
        let sumOflastKElements = numbers.slice(-k)
                                   .map(Number)
                                   .reduce((acc, value) => {
        
                                        acc += value;
                                        return acc;
                                   });

        numbers.push(sumOflastKElements)
    }


    return numbers;
}

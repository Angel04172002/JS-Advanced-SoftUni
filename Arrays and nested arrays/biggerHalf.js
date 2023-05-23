function biggerHalf(arr)
{
    arr.sort((a,b) => a - b)

    let middle = Math.ceil(arr.length / 2)
    
    return arr.slice(arr.length - middle, arr.length)
}

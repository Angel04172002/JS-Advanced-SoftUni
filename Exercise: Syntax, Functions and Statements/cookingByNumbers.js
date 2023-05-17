function cookingByNumbers(...params)
{
    let number = Number(params[0])
    let result = number

    let operations = {
        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x * 3,
        fillet: x => x - x * 0.2
    }

    for(let i = 1; i < params.length; i++)
    {
        let command = params[i]
        result = operations[command](result)
        console.log(result)
    }
}

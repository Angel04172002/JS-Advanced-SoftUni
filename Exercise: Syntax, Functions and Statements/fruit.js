function fruit(type, weightInGrams, pricePerKg)
{
    let kilograms = weightInGrams / 1000
    let money = kilograms * pricePerKg
    let output = `I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${type}.`
    console.log(output);
}

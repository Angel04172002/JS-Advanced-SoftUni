function pieceOfPie(pieFlavors, flavor1, flavor2)
{
    let indexFlavor1 = pieFlavors.indexOf(flavor1)
    let indexFlavor2 = pieFlavors.indexOf(flavor2)
    return pieFlavors.slice(indexFlavor1, indexFlavor2 + 1)
}

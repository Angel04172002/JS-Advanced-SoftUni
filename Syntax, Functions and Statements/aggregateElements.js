function aggregateElements(input)
{
   let numberSum = 0;
   let inverseSum = 0;
   let stringSum = "";

    for(let element of input)
    {
        numberSum += element;
        inverseSum += (1 / element);
        stringSum += element.toString();
    }

    console.log(numberSum);
    console.log(inverseSum);
    console.log(stringSum);
}

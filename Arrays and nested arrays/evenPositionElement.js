function evenPositionElement(arr)
{
    let evenPositionedElements = arr
                        .filter((x, i) => i % 2 === 0)
                        .join(" ");

    console.log(evenPositionedElements);
}

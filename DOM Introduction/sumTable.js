function sumTable() {

    let tableDataElements = document.querySelectorAll('table tr td:nth-of-type(2)');
    let sumElement = document.getElementById('sum');
    let totalSum = 0;
    let arrayOfDataElements = Array.from(tableDataElements);

    arrayOfDataElements.forEach(x => {
        let cost = x.textContent || 0;
        totalSum += Number(cost);
    });

    sumElement.textContent = totalSum;
}

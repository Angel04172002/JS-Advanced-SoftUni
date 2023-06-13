function solve() {

    const CAMEL_CASE = 'Camel Case';
    const PASCAL_CASE = 'Pascal Case';

    let inputTextElement = document.getElementById('text');
    let namingConventionElement = document.getElementById('naming-convention');
    let resultElement = document.getElementById('result');

    if(namingConventionElement.value != CAMEL_CASE && namingConventionElement.value != PASCAL_CASE) {
        resultElement.textContent = 'Error!';
        return;
    }

    let startingPoint = 0;
    let arrOfStrings = inputTextElement.value.toLowerCase().split(' ');
    let result = [];

    if(namingConventionElement.value == CAMEL_CASE) {
        result.push(arrOfStrings[0][0] + arrOfStrings[0].substring(1));
        startingPoint = 1;
    };

    for(let i = startingPoint; i < arrOfStrings.length; i++) {

        result.push(arrOfStrings[i][0].toUpperCase() + arrOfStrings[i].substring(1));
    };

    resultElement.textContent = result.join('');
}

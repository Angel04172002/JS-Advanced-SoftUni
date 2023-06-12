function subtract() {

    let firstInputElement = document.getElementById('firstNumber');
    let secondInputElement = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');
    
    let firstValue = Number(firstInputElement.value);
    let secondValue = Number(secondInputElement.value);
    let result = firstValue - secondValue;

    resultElement.textContent = result;
}

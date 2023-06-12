function calc() {
    
    let inputElement1 = document.getElementById('num1');
    let inputElement2 = document.getElementById('num2');
    let sumElement = document.getElementById('sum');

    let sum = Number(inputElement1.value) + Number(inputElement2.value);
    sumElement.value = sum;
}

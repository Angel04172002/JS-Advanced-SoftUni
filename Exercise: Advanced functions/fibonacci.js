function getFibonator() {

    let num1 = 0;
    let num2 = 1;

    return function fib() {
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        return num1;
    };
}

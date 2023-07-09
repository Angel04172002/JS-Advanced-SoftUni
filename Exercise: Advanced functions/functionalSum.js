function add(number) {

    let sum = number;

    function calc(num) {
        sum += num;
        return calc;
    }

    calc.toString = () => sum;

    return calc;
}

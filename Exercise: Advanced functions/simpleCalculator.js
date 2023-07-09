function calculator() {

    const OPERATIONS = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    };

    const html = {
        s1: '',
        s2: '',
        result: ''
    };

    function calc(num1, num2, operator) {
        return OPERATIONS[operator](num1, num2);
    }

    return {
        init: (selector1, selector2, resultSelector) => {
            html.s1 = document.querySelector(selector1);
            html.s2 = document.querySelector(selector2);
            html.result = document.querySelector(resultSelector);
        },
        add: () => {
            let num1 = Number(html.s1.value);
            let num2 = Number(html.s2.value);
            html.result.value = calc(num1, num2, '+');
        },
        subtract: () => {
            let num1 = Number(html.s1.value);
            let num2 = Number(html.s2.value);
            html.result.value = calc(num1, num2, '-');
        },
    };
}

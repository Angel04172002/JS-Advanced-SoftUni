function getManager() {

    const SUCCESS = 'Success';

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    const getError = (element) => `Error: not enough ${element[0]} in stock`;

    const commands = {
        restock: (element, quantity) => {
            ingredients[element] += Number(quantity);
            return SUCCESS;
        },
        prepare: (recipe, quantity) => {

            let missingElement;
            let errorMsg;

            for (let i = 0; i < quantity; i++) {

                missingElement = Object.entries(recipes[recipe])
                .find(x => ingredients[x[0]] < Number(x[1]));

                if(missingElement) {
                    errorMsg = getError(missingElement);
                    break;
                };

                Object.entries(recipes[recipe]).forEach(x => {
                    ingredients[x[0]] -= Number(x[1]); 
                });
            }

            return errorMsg ? errorMsg : SUCCESS;
        },
        report: () => {
            return Object.keys(ingredients).reduce((acc, curr) => {
                acc.push(`${curr}=${ingredients[curr]}`);
                return acc;
            }, []).join(' ');
        },
    };


    return function manager(input) {

        let tokens = input.split(' ');

        return tokens.length == 1 
        ? commands[tokens[0]]()
        : commands[tokens[0]](tokens[1], Number(tokens[2]));
    };
}

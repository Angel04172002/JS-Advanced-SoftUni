function heroicInventory(input) {

    let result = [];


    input.forEach(h => {

        let [name, level, itemsAsString] = h.split(' / ');
        level = Number(level);
        let items = [];

        if (itemsAsString) {
           items = itemsAsString.split(", ");
        }

        let hero = {
            name,
            level,
            items
        };

        result.push(hero);
    });

    console.log(JSON.stringify(result));
}

function storeCatalogue(input) {

    let objectsArr = input.map(x => {

        let [name, price] = x.split(" : ");
        price = Number(price);

        return {
            name,
            price
        };
    });

    objectsArr.sort((a, b) => {

        let firstName = a.name.toLowerCase();
        let secondName = b.name.toLowerCase();

        return firstName.localeCompare(secondName);
    });



    let output = "";


    for(let obj of objectsArr) {

        if(!output.includes(obj.name[0])) {
            output += `${obj.name[0]}\n`;
        }

        output += `  ${obj.name}: ${obj.price}\n`;
    }

    console.log(output);
}

function lowestPricesInCities(input) {

    let data = {};

    input.forEach(x => {

        let [town, model, price] = x.split(" | ");
        price = Number(price);

        if(!data[model]) {
            data[model] = {};
        }

        data[model][town] = price;
    });


    Object.entries(data).forEach(el => {

        let sorted = Object.entries(el[1]).sort((a, b) => {
            return a[1] - b[1];
        });
        console.log(`${el[0]} -> ${sorted[0][1]} (${sorted[0][0]})`)
    }); 
}

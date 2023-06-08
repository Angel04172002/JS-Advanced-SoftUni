function lowestPricesInCities(input) {

    let data = {};
    let products = [];

    input.forEach(x => {

        let [townName, currentProduct, currentPrice] = x.split(" | ");
        currentPrice = Number(currentPrice);

        let entry = {};
        entry.town = townName;
        entry.price = currentPrice;

        data.product = currentProduct;
        data.info = entry;

        let foundProduct = products.find(o => {

            let product = o.product;

            return product === currentProduct;
        });


        if (foundProduct) {

            if (foundProduct.info.price > currentPrice) {
                foundProduct.info.price = currentPrice;
                foundProduct.info.town = townName;
            }; 

        } else {
            products.push(data);
        };

        data = {};
    });

    
    products.forEach(p => {

        console.log(`${p.product} -> ${p.info.price} (${p.info.town})`);
    });
}

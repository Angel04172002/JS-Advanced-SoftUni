function autoEngineeringCompany(input) {

    const data = new Map();

    input.forEach(x => {

        let [carBrand, carModel, producedCars] = x.split(' | ');
        producedCars = Number(producedCars);
        let carInfo = data.get(carBrand);

        if (!carInfo) {
            data.set(carBrand, {});
        };

        if (Object.keys(data.get(carBrand)).includes(carModel)) {
            data.get(carBrand)[carModel] += producedCars;
        } else {
            data.get(carBrand)[carModel] = producedCars;
        };
    });

    for(let [key, value] of data.entries()) {

        console.log(key);

        for(let entry in value) {
            console.log(`###${entry} -> ${value[entry]}`);
        }
    }  
}

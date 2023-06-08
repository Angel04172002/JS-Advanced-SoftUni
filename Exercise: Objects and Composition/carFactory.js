function carFactory(input) {

    let car = {};

    car.model = input.model;


    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };
    let engines = [smallEngine, normalEngine, monsterEngine];

    let carEngine = engines.find(engine => {
        return engine.power - input.power >= 0;
    });

    car.engine = carEngine;

    let carriages = {
        'hatchback': { 
            type: 'hatchback', 
            color: input.color 
        },
        'coupe': { 
            type: 'coupe', 
            color: input.color
        },
    }
 
    car.carriage = carriages[input.carriage];

    let wheelSize = input.wheelsize % 2 === 1 ? input.wheelsize : input.wheelsize - 1;

    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return car;
}

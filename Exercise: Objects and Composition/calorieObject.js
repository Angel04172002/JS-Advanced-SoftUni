function calorieObject(input) {

    let foodCalories = {};

    let products = input.filter((x, i) => i % 2 === 0);
    let calories = input.filter((x, i) => i % 2 === 1).map(x => Number(x));

    products.forEach((product, index) => {
        foodCalories[product] = calories[index];
    });

    console.log(foodCalories);
}

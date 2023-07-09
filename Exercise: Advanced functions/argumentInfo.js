function argumentInfo(...input) {

    let obj = {};

    input.forEach(x => {

        let typeOfArg = typeof x;
        console.log(`${typeOfArg}: ${x}`);
        obj[typeOfArg] = obj[typeOfArg] ? obj[typeOfArg] += 1 : obj[typeOfArg] = 1
    });

    let sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    sortedObj.forEach(([type, count]) => {
        console.log(`${type} = ${count}`);
    });
}

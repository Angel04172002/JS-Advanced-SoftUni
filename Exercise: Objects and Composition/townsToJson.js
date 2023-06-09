function townsToJson(input) {

    let matrix = input.map(e => {

        let arr = e.trim().split('|').filter(x => x.length > 0).map(x => x.trim());
        return arr;
    });

    let headers = matrix[0];
    let data = matrix.slice(1);


    let result = data.map((arr) => {

        let tempDict = {};

        headers.forEach((header, i) => {

            let value = Number(arr[i]);

            if (Number.isNaN(value)) {
                value = arr[i];
            } else {
                value = Number(value.toFixed(2));
            }

            tempDict[header] = value;
        });

        return tempDict;
    });

    
    console.log(JSON.stringify(result));
}

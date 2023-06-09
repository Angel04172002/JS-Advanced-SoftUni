function townsToJson(input) {


    let towns = [];
    let townData = {};

    let [town, latitude, longitude] = input[0].split("|").filter(x => x.length > 0).map(x => x.trim());

    for(let i = 1; i < input.length; i++) {

        let [currentTown, currentLatitude, currentLongitude] = input[i].split("|").filter(x => x.length > 0).map(x => x.trim());

        currentLatitude = Number(currentLatitude);
        currentLongitude = Number(currentLongitude);

        townData[town] = currentTown;
        townData[latitude] = Number(currentLatitude.toFixed(2));
        townData[longitude] = Number(currentLongitude.toFixed(2));

        towns.push(townData);

        townData = {};
    };

    console.log(JSON.stringify(towns));
}

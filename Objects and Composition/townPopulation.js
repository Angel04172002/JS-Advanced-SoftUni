function townPopulation(input) {

    let towns = {};

   input.forEach(record => {

        let [townName, townPopulation] = record.split(' <-> ');

        townPopulation = Number(townPopulation);

        if(!towns[townName]) {
            towns[townName] = 0;
        };

        towns[townName] += townPopulation;
   });

   Object.keys(towns).forEach(key => {
        console.log(`${key} : ${towns[key]}`);
   });
}

function filterEmployees(data, criteria) {

    let parsedEmployees = JSON.parse(data);
    let [prop, value] = criteria.split('-');

    return parsedEmployees
        .filter(e => e[prop] == value)
        .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .forEach(x => console.log(x));
}

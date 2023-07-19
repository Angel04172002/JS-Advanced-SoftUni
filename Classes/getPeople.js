function getPeople() {

    let data = [
        { firstName: 'Anna', lastName: 'Simpson', age: 22, email: 'anna@yahoo.com' },
        { firstName: 'SoftUni', lastName: '', age: '', email: '' },
        { firstName: 'Stephan', lastName: 'Johnson', age: 25, email: '' },
        { firstName: 'Gabriel', lastName: 'Peterson', age: 24, email: 'g.p@gmail.com' }
    ];

    return data.map(x => new Person(x.firstName, x.lastName, x.age, x.email));
}


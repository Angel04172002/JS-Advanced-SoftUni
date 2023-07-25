function createPerson(firstName, lastName) {

    let person = { firstName, lastName };

    Object.defineProperties(person, {

        fullName: {
            get: function() {
                return `${this.firstName} ${this.lastName}`;
            },

            set: function(value) {
                let [first, last] = value.split(' ');

                if(!first || !last) {
                    return;
                };

                this.firstName = first;
                this.lastName = last;
            }
        },
    });

    return person;
}

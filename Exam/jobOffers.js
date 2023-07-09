class JobOffers {

    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {

        let resultNames = [];

        candidates.forEach(c => {

            let [name, education, yearsExperience] = c.split('-');
            let currentEmployee = this.jobCandidates.find(e => e.name === name);
            yearsExperience = Number(yearsExperience);

            if (currentEmployee) {

                if (yearsExperience > currentEmployee.yearsExperience) {
                    currentEmployee.yearsExperience = c.yearsExperience;
                };

            } else {

                let person = {
                    name,
                    education: education + ' degree',
                    yearsExperience: Number(yearsExperience)
                };

                this.jobCandidates.push(person);
                resultNames.push(person.name);
            };
        });

        return `You successfully added candidates: ${resultNames.join(', ')}.`;
    }


    jobOffer(chosenPerson) {

        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);

        let currentEmployee = this.jobCandidates.find(e => e.name === name);

        if (currentEmployee.yearsExperience !== 'hired') {

            if (!currentEmployee) {

                throw new Error(`${name} is not in the candidates list!`)
            }

            if (minimalExperience > currentEmployee.yearsExperience) {
                throw new Error(`${currentEmployee.name} does not have enough experience as ${currentEmployee.positon}, minimum requirement is ${minimalExperience} years.`)
            }
        }

        currentEmployee.yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`

    }


    salaryBonus(name) {

        let currentEmployee = this.jobCandidates.find(e => e.name === name);

        if (!currentEmployee) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (currentEmployee.education === "Bachelor degree") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (currentEmployee.education === "Master degree") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        }

        return `${currentEmployee.name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
    }

    candidatesDatabase() {

        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        let result = [];
        result.push("Candidates list:");

        this.jobCandidates
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(e => {
                result.push(`${e.name}-${e.yearsExperience}`);
            });

        return result.join('\n');
    }
}


let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("John Jones-8"));






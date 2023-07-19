class Company {
    departments = {};

    checkForValidInput(value) {
        return value !== '' && value !== null && value !== undefined;
    }

    addEmployee(name, salary, position, department) {
        if (!this.checkForValidInput(name) || !this.checkForValidInput(salary) ||
            !this.checkForValidInput(position) || !this.checkForValidInput(department) || salary < 0) {

            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({
            name,
            salary,
            position
        });

        return `New employee is hired. Name: ${name}. Position: ${position}`;

    }

    bestDepartment() {

        let bestDepartment = { departmentInfo: { salary: 0 } };

        for (let key of Object.keys(this.departments)) {

            let averageSalary = this.departments[key].reduce((acc, curr, index, arr) => {

                acc += Number(curr.salary);

                if (index === arr.length - 1) {
                    return acc / arr.length;
                }

                return acc;
            }, 0);

            if (averageSalary > bestDepartment.departmentInfo.salary) {
                bestDepartment = {
                    departmentName: key,
                    departmentInfo: this.departments[key]
                };

                bestDepartment.averageSalary = averageSalary;
            }
        }

        let output = [];

        output.push(`Best Department is: ${bestDepartment.departmentName}`);
        output.push(`Average salary: ${bestDepartment.averageSalary.toFixed(2)}`);

        bestDepartment.departmentInfo.sort((a, b) => {
            let firstCriteria = b.salary - a.salary;
            let secondCriteria = a.name.localeCompare(b.name);

            return firstCriteria || secondCriteria;
        });

        for (let employee of bestDepartment.departmentInfo) {
            output.push(`${employee.name} ${employee.salary} ${employee.position}`);
        }

        return output.join('\n');
    }
}

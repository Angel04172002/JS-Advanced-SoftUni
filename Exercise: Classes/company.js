class Company {

    departments = [];

    checkForValidInput(value) {
        return value !== '' && value !== null && value !== undefined;
    }

    getDepart(name) {

        let existingDepartment = this.departments.find(x => x.name === name);

        if (!existingDepartment) {

            let newDepartment = { name, employees: [], salaries: [], positions: [] };
            this.departments.push(newDepartment);
            return newDepartment;
        };

        return existingDepartment;
    }

    getSalariesSum(department) {
        return department.salaries.reduce((acc, curr) => acc + curr, 0);
    }

    getBestDepart() {
        return this.departments.sort((a, b) => {

            return this.getSalariesSum(b) / b.salaries.length -
                   this.getSalariesSum(a) / a.salaries.length

        })[0];
    }

    addEmployee(name, salary, position, department) {

        if (!this.checkForValidInput(name) || !this.checkForValidInput(salary) ||
            !this.checkForValidInput(position) || !this.checkForValidInput(department) || salary < 0) {

            throw new Error('Invalid input!');
        }

        let foundDepartment = this.getDepart(department);
        foundDepartment.employees.push(name);
        foundDepartment.salaries.push(salary);
        foundDepartment.positions.push(position);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        //dep with highest average salary
        let bestDep = this.getBestDepart();

        let employeesToPrint = bestDep.employees.reduce((acc, curr, index) => {
            acc[index] = [];
            acc[index].push(curr, bestDep.salaries[index], bestDep.positions[index]);
            return acc;
        }, []).sort((a, b) => {
            return a[1] - b[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
        }).map(x => x.join(' ')).join('\n');

        let averageSalary = (this.getSalariesSum(bestDep) / bestDep.salaries.length).toFixed(2);

        let output = `Best Department is: ${bestDep.name}\nAverage salary: ${averageSalary}\n${employeesToPrint}`;

        return output;
    }
}

function solution() {

    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.dividend = 0;
        this.tasks = [];
    }

    Employee.prototype.work = function () {

        let currentTask = this.tasks.shift();
        this.tasks.push(currentTask);

        console.log(`${this.name} ${currentTask}.`);
    };

    Employee.prototype.collectSalary = function () {
        console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
    };


    function Junior(name, age) {
        Employee.call(this, name, age);
        this.tasks = ['is working on a simple task']
    }

    Junior.prototype = Object.create(Employee.prototype);


    function Senior(name, age) {
        Employee.call(this, name, age);
        this.tasks = [
            'is working on a complicated task',
            'is taking time off work',
            'is supervising junior workers'
        ];
    }

    Senior.prototype = Object.create(Employee.prototype);


    function Manager(name, age) {
        Employee.call(this, name, age);
        this.tasks = [
            'scheduled a meeting',
            'is preparing a quarterly report'
        ];
    }

    Manager.prototype = Object.create(Employee.prototype);

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}

"use strict";
// Создать класс Employee у которого будут следующие поля (задаются через конструктор):

// firstName - тип string
// lastName - тип string
// age - тип number
// jobPosition - тип string
// salary - тип number

// Создать 2 экземпляра этого класса.
// К данному классу, также необходимо добавить:

// “геттер” fullName - который будет выводить полное имя (комбинация firstName и lastName)
// добавить статический свойство - "кол-во дней отпуска в году" = 18
// добавить метод, который будет считать годовую зарплату (salary умножить на кол-во месяцев в году).


class Employee {
    constructor(firstName, lastName, age, jobPosition, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobPosition = jobPosition;
        this.salary = salary;
    }

    get fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    } 

    static countRest() {
        return 18;
    }

    yearSalary() {
        console.log(this.salary * 12);
    }
}

const senior = new Employee("Igor", "Tyan", 33, 'Senior', 5000);
const junior = new Employee("Olga", "Barnikova", 38, 'Junior', 500);

console.log(senior);
console.log(junior);
senior.fullName;
junior.fullName;
console.log(Employee.countRest());
senior.yearSalary();
junior.yearSalary();

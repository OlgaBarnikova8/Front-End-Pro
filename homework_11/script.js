"use strict";
// Создать класс Person, который будет иметь следующие поля:

// firstName
// lastName
// age
// birthDayDate (в формате ‘YYYY-MM-DD’, например ‘1989-02-03’)
// метод celebrate - который будет выводить возвращать текст “Happy Birthday, let’s celebrate’"


// Класс Employee должен наследовать от Person и иметь следующие поля:

// приватное свойство salary
// jobPosition
// метод getYearSalary (как в прошлой домашке)
// метод celebrate - который будет проверять - если день вашего дня рождения в текущем году 
// выпадает на выходной день - то вернет текст “Happy Birthday, let’s celebrate’". 
// Если же дата рождения выпадает на выходной - то вернет текст “Happy Birthday, but I need to work"


// Создать 1 экземпляр класса Person и 1 экземпляр класса Employee. 
// Сделать вызов метод celebrate у обоих объектов.
function isWeekend(date) {
    const dayWeekend = new Date(date).getDay();   
    return dayWeekend == 0 || dayWeekend == 6; 
  } 

class Person {
    constructor(firstName, lastName, age, birthDayDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = birthDayDate;
    }

    celebrate() {
        console.log('Happy Birthday, let’s celebrate');
    } 
}

class Employee extends Person {
    #salary = 0; 

    constructor(firstName, lastName, age, birthDayDate, salary, jobPosition) {
        super(firstName, lastName, age, birthDayDate);
        this.#salary = salary; 
        this.jobPosition = jobPosition;    
    }      

    getYearSalary() {
        return this.#salary * 12;
    }  
    
    celebrate() {        
        let birthDay = new Date(this.birthDayDate);
        birthDay.setFullYear(new Date().getFullYear()); 
        
        if (isWeekend(birthDay)) {
            return super.celebrate();
        } 
        
        console.log("Happy Birthday, but I need to work");
    } 
}

const person1 = new Person("Olga", "Barnikova", 38, '1984-09-03');
console.log(person1);
person1.celebrate();

const employee1 = new Employee("Maksim", "Barnikov", 37, '1985-11-18', 20000, 'collector of furniture');
console.log(employee1);
employee1.celebrate();
console.log(employee1.getYearSalary());

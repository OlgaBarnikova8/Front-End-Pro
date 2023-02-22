"use strict";

// 1. Создайте объект Date для даты своего рождения. 
// Используя методы даты (getMonth, getFullYear и тд) 
// сформировать строку следующего вида - “20.02.1995”.

const birthday = new Date(1984, 9, 3);
let date = birthday.getDate();
let month = birthday.getMonth();
let year = birthday.getFullYear();
console.log(`${date}.0${month}.${year}`); 


// 2. Напишите функции getDiffDays , которая будет принимать 2 даты (дата начала и дата окончания) 
// и возвращать кол-во дней которое прошло между этими датами.

// Если пользователь передал невалидную дату - вывести ошибку в консоль и остановить выполнение функции
// Если пользователь ввел дату начала, которая будет позже чем дата окончания - 
// вывести ошибку дата позже чем дата окончания

function getDiffDays(date1, date2) {

  const start = new Date(date1);
  const end = new Date(date2);
  let startDay = start.getTime();
  let endDay = end.getTime();  
  const diff = endDay - startDay; 

  // if (start === 'Invalid Date') {
  //   console.error('Invalid Date');
  //   return;
  // } 
  
  // if (diff < 0) {
  //   console.error('your start date is later than end');
  //   return;
  // } 

    return diff / (1000 * 3600 * 24);     
}

console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
console.log(getDiffDays('2222222222', '2020-03-15')); // Error: Invalid date
console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end


// 3. Создать функцию isWeekend которая будет проверять - выходной ли день 
// (суббота или воскресенье) в переданной дате и возвращать булевый результат. 

function isWeekend(date) {
  const day = new Date(date);
  let dayWeekend = day.getDay(); 

  if (dayWeekend == 0 || dayWeekend == 6) {
    return true;
  } else {
    return false;
  }  
} 

console.log(isWeekend('2022-02-12')); // true
console.log(isWeekend('2022-02-13')); // true
console.log(isWeekend('2022-02-09')); // false


// 4. Используя методы для работы с форматом JSON необходимо сделать следующие действия с объектом:
// 1. Преобразовать его к формату JSON строки
// 2. Преобразовать обратно в формат JS объекта
// 3. Используя “деструктуризацию” создать переменные с каждым свойством из объекта 
// (fullName, street, city, house)


const person = {
   fullName: 'Sherlock Holmes',
   address: {
     street: "Baker Street",
		 city: "London",
     house: "221b"
   }
}

const json = JSON.stringify(person);
console.log(json);
const parsePerson = JSON.parse(json);
console.log(parsePerson);

const { fullName } = person;
console.log(fullName);

const { street } = person.address;
console.log(street);

const { city } = person.address;
console.log(city);

const { house } = person.address;
console.log(house);

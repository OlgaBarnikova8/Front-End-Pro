"use strict";

// 1. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Для решения задачи необходим использовать рекурсию.

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// Пример работы функции:

console.log(sumTo(4)); // 10
console.log(sumTo(3)); // 6


// // 2. Написать функцию capitalizeFirstLetter , которая будет принимать строку. 
// // Функция возвращает строку, где первый символ будет с заглавной буквы
// function capitalizeFirstLetter(str) {
//   let newStr = str[0]. toUpperCase() + str.slice(1);
//   return newStr;
// }

// console.log(capitalizeFirstLetter("hello")); // Hello
// console.log(capitalizeFirstLetter("HELLO")); // HELLO
// console.log(capitalizeFirstLetter("hElLo")); // HElLo 


// 3. Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
// если она превосходит maxlength, заменяет конец str на "…", 
// так, чтобы её длина стала равна maxlength. 

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength) + '...';
//   } else {
//     return str;
//   }
// }
// console.log(truncate("Hello world", 5)); // Hello...
// console.log(truncate("Hello world", 25)); // Hello world 


// 4. Есть массив студентов.
// Написать функцию, которая бы посчитала средний бал каждого студента 
// и добавила ключ averageMark к каждому студенту в массиве. 

const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]
students.forEach(student => {
  //console.log(student.marks);
  const sumOfMarks = student.marks.reduce((sum, marks) => sum + marks, 0);

  const averageMark = sumOfMarks / student.marks.length;
  
  student.averageMark = averageMark;
});

console.log(students);


// 5. Данн массив vehicles. Необходимо написать код, который реализует подсчет 
//средней цены автомобилей типа SUV:
// Обратите внимание, что поле type может быть написано в любом регистре символов (suv, SUV).
// Для решения задачи вам нужно будет использовать методы массивов (а не обычные циклы)

const vehicles = [
  { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
  { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
  { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
  { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
  { make: 'Toyota', model: 'Sequoia', type: 'SUV', price: 45560 },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
  { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
  { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
  { make: 'Ford', model: 'Explorer', type: 'SUV', price: 31660 }
];

let vehiclesType = vehicles.filter(vehicle => vehicle.type.toUpperCase() === "SUV");
let result = vehiclesType.reduce((sum, vehiclesType) => sum + vehiclesType.price, 0);
let average = result / vehiclesType.length;

console.log(vehiclesType);
console.log(result);
console.log(average);

// 6. Напишите функцию getKeysCount(obj), которая возвращает количество свойств объекта.
// Постарайтесь сделать код как можно короче.
// Примечание: идеальное решение может быть в 1 строку 🙂

// let getKeysCount = obj => Object.keys(obj).length;

// console.log(getKeysCount({ name: 'John' })); // 1
// console.log(getKeysCount({ name: 'John', age: 22 })); // 2
// console.log(getKeysCount({ name: 'John', salary: null })); // 2

// 7.* У нас есть массив чисел arr. Нужно получить отсортированную копию, 
// но оставить arr неизменённым. 
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

function copySorted(arr) {
    return arr.slice().sort((a, b) => a - b);     
}

let arr = [10, 20, 3, 4, 0, 99, 97];
let sorted = copySorted(arr);
console.log(arr); // [10, 20, 3, 4, 0, 99, 97] - массив не должен изменится!
console.log(sorted); // [0, 3, 4, 10, 20, 97, 99]

console.log('new feature is homework_5');
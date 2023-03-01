"use strict";

import { sum } from "./math.js";
console.log(sum(2, 3));

// 1. Реализовать запрос в API (используя fetch) - https://jsonplaceholder.typicode.com/users/1
// Успешный результат необходимо сохранить в localStorage.

// При перезагрузке страницы необходимо проверить, если данные находятся в localStorage - 
// то вывести их, если данные отсутствуют - то сделать заново запрос в API.

function setUserInlocalStorage() {
    let data = localStorage.getItem("1");

    if (data) {
        console.log(`data is in localStorage: ${data}`);
        return;
    } else {

        fetch("https://jsonplaceholder.typicode.com/users/1")
          .then((response) => response.json())
          .then((data) => localStorage.setItem("1", JSON.stringify(data)))
          .then(console.log(localStorage.getItem("1")))
          .catch((error) => console.log(error));
    }
}

setUserInlocalStorage();


// 2. Написать функцию isValidDateFormat(str) , которая бы проверяла 
// валидный формат даты (YYYY/MM/DD HH:MM) или нет
// Функция не должна проверять что дата оригинальна (например можно ввести 32 день месяца) - 
// она должна проверять именно формат даты YYYY/MM/DD HH:MM) Для решения данной задачи используем регулярные выражения

// Также для решения задачи вам поможет эта статья: https://uk.javascript.info/regexp-escaping

function isValidDateFormat(str) {
    const regexp = /^\d{4}\/\d{2}\/\d{2} \d{2}\:\d{2}$/;
    return regexp.test(str); 
}

console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false


// 3. Написать функцию isAfter , которая будет принимать 2 аргумента даты 
// (это может быть либо объект Date, либо timestamp). 
// Функция должна вернуть true, если первая переданная дата будет позже, чем вторая. 
// Иначе вернуть false.
function isAfter(date1, date2) {
    const start = new Date(date1);
    const end = new Date(date2);
    let startDay = start.getTime();
    let endDay = end.getTime();  
    const diff = startDay - endDay; 

    if (diff < 0) {
        return false;
    }

    return true;
}

console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
console.log(isAfter(1648636135000, 1648549735000)); // true
console.log(isAfter(1648549735000, 1648636135000)); // false

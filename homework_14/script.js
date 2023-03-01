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

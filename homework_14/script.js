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









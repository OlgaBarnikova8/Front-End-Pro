"use strict";

// Необходимо сделать следующие действия:
// 1. Отправить запрос в АПИ и получить результат - https://jsonplaceholder.typicode.com/albums
// 2. Как только пришел ответ необходимо сформировать список (тег li) всех заголовков (поле title). 
//    Все элементы должны находится внутри списка с ID="albums"
// 3. Добавить класс "album_title" каждому новому элементу <li>

const albums = document.getElementById("albums");
const classItem = "album_title";

function addItem(list, style, title) {
    const item = document.createElement("li");
    item.innerHTML = title;
    item.classList.add(style);
    item.style.color = "brown";
    list.append(item);
}

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then(data => data.forEach(element => addItem(albums, classItem, element.title)))
  .catch((error) => console.log(error));

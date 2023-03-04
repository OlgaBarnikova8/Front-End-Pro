"use strict";

// 1.Добавить к каждому LI кнопку “Delete”. 
// 2.При нажатии на эту кнопку должно происходить удаление конкретного альбома (LI).
// Применить подход: делегирование событий
// Примечание: будьте внимательны, и не забывайте что вы работает с API запросом - ваш код асинхронный!

const albums = document.getElementById("albums");
const classItem = "album_title";

albums.addEventListener("click", (event)  => {  
  const isRemoveButton = event.target.className === "btn";  

  if (isRemoveButton) {
    //event.target.parentNode.remove();    
    event.target.parentElement.remove();
  }
});

function addItem(list, style, title) {
    const item = document.createElement("li");    
    item.innerHTML = title;
    item.classList.add(style);
    item.style.color = "brown";
    list.append(item);

    const button = document.createElement("button");
    button.innerHTML = "remove";
    button.classList = "btn";    
    item.prepend(button);

    // button.addEventListener('click', function() {
    //   albums.removeChild(item);
    //   button.remove(this);
    // });  
}

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then(data => data.forEach(element => addItem(albums, classItem, element.title)))
  .catch((error) => console.log(error));  

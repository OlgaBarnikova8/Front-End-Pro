"use strict";

// На странице находится форма: инпут для ввода текста и кнопка.
// Пользователь может ввести что-то в инпут и нажать на кнопку, 
// после этого в списке ниже должна отобразится строка, с тем что было введено в инпуте. 
// После этого инпут в форме должен очистится
// Если пользователь нажимает на кнопку “Add” - а инпут пустой, то выводить ошибку. 
// Ошибка должна исчезать - если пользователь снова начал вводить текст в инпут.
// Добавить в каждую строку кнопку “Delete”, при клике на которую элемент удаляется из списка

const form = document.forms.fruit;
const { nameFruit } = form.elements;
const button = document.querySelector("button");
const list = document.getElementById("list");
const errorMessage = document.querySelector(".errorMessage");

form.onsubmit = (event) => {
  event.preventDefault();
}

nameFruit.oninput = (event) => {      
    errorMessage.innerHTML = "";
}

button.addEventListener("click", function() {
  if (nameFruit.value.trim() !== "") {   

      const item = document.createElement("li");
      item.innerHTML = nameFruit.value;
      item.classList.add("item-list");
      list.append(item);
      this.previousElementSibling.value = "";  

      const button = document.createElement("button");
      button.innerHTML = "remove";
      button.classList = "btn";         
      item.prepend(button);

      button.onclick = (event) => {
        event.target.parentElement.remove();
      }

  } else {        
      errorMessage.innerHTML = "enter a fruit";
  }
});

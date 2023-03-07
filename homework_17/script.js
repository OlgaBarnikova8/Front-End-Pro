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
const list = document.getElementById("list");
const errorMessage = document.querySelector(".errorMessage");

list.addEventListener("click", (event)  => {  
  const isRemoveButton = event.target.className === "btn";  

  if (isRemoveButton) {    
    event.target.parentElement.remove();
  }
});


function addItem(list, style, content) {
  const item = document.createElement("li");    
  item.innerHTML = content;
  item.classList.add(style);  
  list.append(item);

  const button = document.createElement("button");
  button.innerHTML = "remove";
  button.classList = "btn";    
  item.prepend(button);
}  

function isEmptyField(content) {
  return content.value.trim().length === 0
}

form.onsubmit = (event) => {
  event.preventDefault();

  if (isEmptyField(nameFruit)) {
    errorMessage.innerHTML = "enter a fruit";
  } else {
    addItem(list, "item-style", nameFruit.value);
  }   
  
  nameFruit.value = "";
}

nameFruit.oninput = (event) => {      
  errorMessage.innerHTML = "";
} 

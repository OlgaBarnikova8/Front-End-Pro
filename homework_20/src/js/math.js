export const mult = (a, b) => a * b;

const form = document.forms.fruit;
const { nameFruit } = form.elements;
const list = document.getElementById("list");
const errorMessage = document.querySelector(".errorMessage");

list.addEventListener("click", (event)  => {  
  const isRemoveButton = event.target.className === "btn btn-primary";  
  
  if (isRemoveButton) {    
    event.target.closest("li").remove();
  }  
});


list.addEventListener("change", (event)  => {
  const isCheck = event.target.classList.contains("form-check-inline");
  
  if (isCheck) {
    const li = event.target.closest("li");
    li.classList.toggle("text-through");

    const [ btn ] = li.getElementsByClassName("btn btn-primary");    
    btn.disabled = !btn.disabled;    
  }
});  


function addItem(list, style, content) {
  const item = document.createElement("li");    
  item.innerHTML = content;
  item.classList.add(style);  
  list.append(item);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList = "form-check-inline";    
  item.prepend(checkbox);

  const button = document.createElement("button");
  button.innerHTML = "remove";
  button.classList = "btn btn-primary";    
  item.append(button);
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

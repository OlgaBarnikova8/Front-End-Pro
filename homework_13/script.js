"use strict";
// Сделать запрос в API использую fetch

// https://jsonplaceholder.typicode.com/users - необходимо получить список пользователей

// После получения результата найти пользователя (используя методы массива), 
// который работает в компании "Johns Group"

// Получение данных нужно реализовать одним из способов (.then/.catch) или (async/await)

const API_URL = "https://jsonplaceholder.typicode.com/users";

fetch(API_URL)
.then((response) => response.json())
.then((data) => console.log("1", data, data.find(user => user.company.name == "Johns Group")))
.catch((error) => console.log(error));


const getPosts = async () => {
  try {
    const response = await fetch(API_URL);    
    const data = await response.json();
    console.log("2", data);
    console.log(data.find(user => user.company.name == "Romaguera-Crona"));
  } catch (error) {
    console.log(error);
  }
};

getPosts();

import { getUsers, createUsers } from "./api.js";
import { createTd, createTdWithLink } from "./dom.js";

const usersTableNode = document.querySelector("#users-table");
const [tbody] = usersTableNode.tBodies;
const tableSpinnerNode = usersTableNode.querySelector(".table-spinner");

const addUserToTable = ({ id, name, email, phone}) => {
    const tr = document.createElement("tr");

    const button = document.createElement("button");
    button.className = "btn btn-danger delete-user";
    button.innerHTML = "<i class='bi bi-trash'></i>";

    tr.append(
        createTd(id), 
        createTd(name), 
        createTdWithLink(email, `mailto:${email}`), 
        createTdWithLink(phone, `tel:${phone} `),
        createTd(button),
    );
    tbody.append(tr);
}

const getData = async () => {
    const users = await getUsers();    
    users.forEach(user => addUserToTable(user));

    tableSpinnerNode.style.display = "none";
}

getData();

tbody.addEventListener("click", (event) => {
    const isRemoveButton = event.target.classList.contains("delete-user");

    if (isRemoveButton) {
        const tr = event.target.closest("tr");
        tr.remove();
    }
});


const form = document.forms["user-form"];
const { name } = form;
const buttonSubmit = document.getElementById("submit-btn");
const buttonLoader = document.getElementById("loader-btn");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    //Validations
    if (name.value.trim().length === 0) {
        name.classList.add("is-invalid");
        return;
    }

    //Show loader button
    buttonSubmit.classList.add("d-none");
    buttonLoader.classList.remove("d-none");
    
    //Send data to API
    const formData = new FormData(form);    
    const newUser = await createUsers(formData);
    console.log(newUser);

    addUserToTable({ 
        id: newUser.id, 
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
    });
    
    //Reset form and button
    form.reset();    
    buttonSubmit.classList.remove("d-none");
    buttonLoader.classList.add("d-none");
});

name.oninput = () => {
    name.classList.remove("is-invalid");
}

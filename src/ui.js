export const users = [];
export const myList = document.getElementById("users-list");
export const myInput = document.getElementById("name-input");
export const myButton = document.getElementById("submit-btn");
export const myLoadButton = document.getElementById("load-btn");

export function renderUsers() {
    myList.innerHTML = "";
    users.forEach(function(user) {
        const newUser = document.createElement('li');
        newUser.textContent = user;
        myList.appendChild(newUser);
    });
}

export function addUserName(){
    const name = myInput.value.trim();
    if (name === "") {
        alert("Имя не может быть пустым");
    } else {
        users.push(name);
        myInput.value = "";
        renderUsers();
    }
}
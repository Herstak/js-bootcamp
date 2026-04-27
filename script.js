const users = [];
const myList = document.getElementById("users-list");
const myInput = document.getElementById("name-input");
const myButton = document.getElementById("submit-btn");

myButton.addEventListener('click', function(){
    const name = myInput.value.trim();
    if (name === "") {
        alert("Имя не может быть пустым");
    } else {
        users.push(name);
        myInput.value = "";
        renderUsers();
    }
})

function renderUsers() {
    myList.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        const newUser = document.createElement('li');
        const newContent = document.createTextNode(users[i]);
        newUser.appendChild(newContent);
        myList.appendChild(newUser);
    }
}
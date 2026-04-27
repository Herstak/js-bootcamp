const users = [];
const myList = document.getElementById("users-list");
const myInput = document.getElementById("name-input");
const myButton = document.getElementById("submit-btn");
const myLoadButton = document.getElementById("load-btn");

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

myLoadButton.addEventListener('click', function() {
    getUsersData();
})

async function getUsersData() {
        try {
            const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
            const usersData = await usersResponse.json();
            const usersName = usersData.map(user => user.name);
            usersName.forEach(function(user){
                users.push(user);
            });
        } catch (error) {
            console.log("Ошибка: ", error);
        }
        renderUsers();
    }

function renderUsers() {
    myList.innerHTML = "";
    users.forEach(function(user) {
        const newUser = document.createElement('li');
        newUser.textContent = user;
        myList.appendChild(newUser);
    });
}
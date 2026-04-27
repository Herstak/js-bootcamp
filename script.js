const myInput = document.getElementById("name-input");
const myButton = document.getElementById("submit-btn");
const myDiv = document.getElementById("greeting-box");

myButton.addEventListener('click', function(){
    let name = myInput.value.trim();
    if (name === "" || name === null) {
        myDiv.textContent = "Анонимы здесь не выживают.";
        myDiv.style.color = "red";
    } else {
        myDiv.textContent = `Привет, ${name}!`;
        myDiv.style.color = "green";
    }
})

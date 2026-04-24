let userName = prompt("Как тебя зовут");

let myDiv = document.getElementById("greeting");

myDiv.textContent = `Привет, ${userName}!`;
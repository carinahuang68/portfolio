const add = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

add.addEventListener('click', function(e) {
    e.preventDefault();
    if (input.value != "") {
        const todo = document.createElement("li");
        todo.innerText = input.value;
        list.append(todo);
        input.value = "";
    }
    
})

h1.addEventListener("click", function() {
    let userInput = prompt("Enter name of the list");
    if (userInput != "" && userInput != null) {
        h1.innerText = userInput;
    }
})

list.addEventListener('click', function(e) {
    e.target.nodeName && e.target.remove();
})

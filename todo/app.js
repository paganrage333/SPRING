const form = document.querySelector("form");
const toDoList = document.querySelector("#todo-list");

  form.addEventListener("submit", function(event) {
  event.preventDefault();
  const newInput = document.querySelector("#list-item");
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");
  newLi.innerText = newInput.value;
  newButton.innerText = "Remove";

  newButton.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });
  localStorage.setItem('todo', JSON.stringify(newLi.value));
  newLi.append(newButton);
  toDoList.append(newLi);
  form.reset();
});


toDoList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.style.textDecoration = "line-through";
    }
  }); 

  


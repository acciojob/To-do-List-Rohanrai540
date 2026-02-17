//your code here
const input = document.getElementById("newTodoInput");
const button = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

button.addEventListener("click", () => {

  const todoText = input.value.trim();

  // prevent empty todo
  if (todoText === "") return;

  // create li
  const li = document.createElement("li");
  li.innerText = todoText;

  // append li to list
  todoList.appendChild(li);

  // clear input
  input.value = "";
});



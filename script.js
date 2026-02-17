//your code here
document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("newTodoInput");
  const button = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  button.addEventListener("click", function () {

    const todoText = input.value.trim();

    // prevent empty submission
    if (todoText === "") return;

    // create li element
    const li = document.createElement("li");
    li.textContent = todoText;

    // add to list
    todoList.appendChild(li);

    // clear input
    input.value = "";
  });

});


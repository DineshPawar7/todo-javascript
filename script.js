
const todoInput = document.getElementById("todoInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

addTaskBtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("todo-item");
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <div class="todo-buttons">
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  todoList.appendChild(taskItem);

  todoInput.value = "";

  const completeBtn = taskItem.querySelector(".complete-btn");
  completeBtn.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  const deleteBtn = taskItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });
});

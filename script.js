let todos = [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // جلوگیری از رفرش
  const newTitle = input.value.trim();

  if (newTitle) {
    todos.push({ title: newTitle, done: false });
    input.value = "";
    renderTodos();
  }
});

function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.textContent = `${todo.title} ${todo.done ? "✅" : "❌"}`;

    // دکمه حذف
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "حذف";
    deleteBtn.onclick = () => {
      todos.splice(index, 1);
      renderTodos();
    };

    // دکمه تغییر وضعیت
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "تغییر وضعیت";
    toggleBtn.onclick = () => {
      todos[index].done = !todos[index].done;
      renderTodos();
    };

    li.appendChild(deleteBtn);
    li.appendChild(toggleBtn);
    list.appendChild(li);
  });
}

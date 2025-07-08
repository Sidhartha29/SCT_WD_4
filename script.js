const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && input.value.trim() !== "") {
    addTask(input.value.trim());
    input.value = "";
  }
});

function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  list.appendChild(li);
}

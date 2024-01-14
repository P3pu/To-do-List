const taksInput = document.querySelector(".taksInput");
const addTaskBtn = document.querySelector(".addTaskBtn");
const newTask = document.querySelector(".newTask");

addTaskBtn.addEventListener("click", () => {
  addTask();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (taksInput.value.trim() === "") {
    alert("digite Algo");
    return;
  }

  const item = document.createElement("li");
  const span = document.createElement("span");
  const bntDelete = document.createElement("button");

  item.classList.add("item");
  bntDelete.classList.add("btnDelete");
  bntDelete.innerHTML = "Delete";

  bntDelete.addEventListener("click", () => {
    item.remove();
  });

  span.innerHTML = taksInput.value;
  taksInput.focus();
  const taksInputValue = taksInput.value; // Move this line here
  taksInput.value = "";

  item.appendChild(span);
  item.appendChild(bntDelete);
  newTask.appendChild(item);

  localStorage.setItem("Lista", taksInputValue);
}

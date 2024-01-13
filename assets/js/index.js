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
  const item = document.createElement("li");
  const span = document.createElement("span");
  const bntDelete = document.createElement("button");
  item.classList.add("item");
  bntDelete.classList.add("btnDelete");
  bntDelete.innerHTML = "Delete";

  bntDelete.addEventListener("click", () => {
    item.remove();
  });

  if (taksInput.value === "") {
    alert("digite Algo");
    taksInput.value.remove();
  } else {
    span.innerHTML = taksInput.value;
    taksInput.focus();
    taksInput.value = "";
  }
  item.appendChild(span);
  item.appendChild(bntDelete);
  newTask.appendChild(item);
}

console.log("oi");


const input = document.querySelector(".task-writer");
const taskList = document.querySelector(".task-list");
const addBtn = document.querySelector(".addBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const enter = document.querySelector(".enter");


addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add("task");
    taskList.appendChild(li);
});

deleteBtn.addEventListener("click", () => {
    let li = taskList.lastElementChild;
    if(li){li.remove()};
});

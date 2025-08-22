const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const clearList = document.getElementById("clear-list");
const listCount = document.getElementById("list-count");

function taskCount() {
    const totalTasks = taskList.children.length;
    listCount.textContent = `Total items: ${totalTasks}`;
}

function handleAddTask() {
    const task = input.value.trim();

    if (task !== "") {
        const li = document.createElement("li");
        li.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        const taskText = document.createElement("span");
        taskText.textContent = task;
        taskText.classList.add("task-text");

        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.classList.add("delete-btn");

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(delBtn);
        taskList.appendChild(li);

        taskCount();

        checkbox.addEventListener("change", () => {
            taskText.classList.toggle("completed");
        });

        delBtn.addEventListener("click", () => {
            li.remove();
            taskCount();
        });

        input.value = "";
    }
}

addBtn.addEventListener("click", handleAddTask);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleAddTask();
});

clearList.addEventListener("click", () => {
    taskList.innerHTML = "";
    taskCount();
});

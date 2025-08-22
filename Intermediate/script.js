const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const listCount = document.getElementById("list-count");
const clearList = document.getElementById("clear-list");
const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = [];

function saveTasksToStorage() {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function loadTasksFromStorage() {
    const stored = localStorage.getItem("todoTasks");

    if (stored) {
        tasks = JSON.parse(stored);
        tasks.forEach((task) => renderTask(task));
    }
    taskCount();
}

function taskCount() {
    const totalTask = taskList.children.length;
    listCount.textContent = `Total items: ${totalTask}`;
}

function filterTask(filter) {
    const allTasks = document.querySelectorAll(".task-item");

    allTasks.forEach((task) => {
        const checkbox = task.querySelector(".task-checkbox");
        const isCompleted = checkbox.checked;

        if (filter === "all") {
            task.style.display = "flex";
        } else if (filter === "active") {
            task.style.display = isCompleted ? "none" : "flex";
        } else if (filter === "completed") {
            task.style.display = isCompleted ? "flex" : "none";
        }
    });
}

function renderTask(taskObj) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.checked = taskObj.completed;

    const taskText = document.createElement("span");
    taskText.textContent = taskObj.text;
    taskText.classList.add("task-text");
    if (taskObj.completed) taskText.classList.add("completed");

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("delete-btn");

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    checkbox.addEventListener("change", () => {
        taskObj.completed = checkbox.checked;
        taskText.classList.toggle("completed");
        saveTasksToStorage();
    });

    delBtn.addEventListener("click", () => {
        li.remove();
        tasks = tasks.filter((t) => t !== taskObj);
        saveTasksToStorage();
        taskCount();
    });
}

function handleAddTask() {
    const task = input.value.trim();

    if (task !== "") {
        const newTaks = {
            text: task,
            completed: false,
        };

        tasks.push(newTaks);
        renderTask(newTaks);
        saveTasksToStorage();

        taskCount();
        input.value = "";
    }
}

addBtn.addEventListener("click", handleAddTask);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleAddTask();
});

clearList.addEventListener("click", () => {
    tasks = [];
    taskList.innerHTML = "";
    saveTasksToStorage();
    taskCount();
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;
        filterTask(filter);
    });
});

loadTasksFromStorage();

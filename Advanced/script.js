const searchInput = document.getElementById("search-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.querySelector(".task-list");
const btnSection = document.querySelector(".button-section");
const countTasks = document.getElementById("count");
const clearList = document.getElementById("clear-list");
const dateToday = document.getElementById("date");

let tasks = [];
let currentFilter = "All";

function saveTasksToStorage() {
    localStorage.setItem("todoTasks2", JSON.stringify(tasks));
}

function loadTasksFromStorage() {
    const stored = localStorage.getItem("todoTasks2");

    if (stored) {
        tasks = JSON.parse(stored);
    }

    const allBtn = document.querySelector('[data-filter = "All"]');
    if (allBtn) {
        allBtn.focus();
    }
    renderNotes(currentFilter);
}

function updateTask(task) {
    tasks.push({
        id: Date.now(),
        text: task,
        completed: false,
    });
}

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasksToStorage();
    renderNotes(currentFilter);
}

function updateDate() {
    dateToday.textContent = new Date().toLocaleString(undefined, {
        year: "2-digit",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
}

updateDate();
setInterval(updateDate, 60000);

function renderNotes(currentFilter) {
    taskList.innerHTML = "";

    let filteredTasks = [];

    if (currentFilter === "All") {
        filteredTasks = tasks;
    } else if (currentFilter === "Active") {
        filteredTasks = tasks.filter((task) => !task.completed);
    } else if (currentFilter === "Completed") {
        filteredTasks = tasks.filter((task) => task.completed);
    }

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `<img src="empty-img.jpg" alt="empty" class="empty-img">`;
        countTasks.textContent = "0";
    }

    filteredTasks.forEach((task) => {
        const li = document.createElement("li");
        li.classList.add("list-items");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("list-checkbox");
        checkbox.checked = task.completed;

        const taskText = document.createElement("p");
        taskText.textContent = task.text;
        taskText.classList.add("list-text");
        if (task.completed) taskText.classList.add("completed");

        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.classList.add("delete-btn");

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(delBtn);
        taskList.appendChild(li);

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            taskText.classList.toggle("completed");
            saveTasksToStorage();
        });

        delBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });
    });

    countTasks.textContent = filteredTasks.length;
}

function handleAddTask() {
    const task = searchInput.value.trim();

    if (!task) {
        alert("Add task can not be empty");
    } else if (task) {
        updateTask(task);
    }

    saveTasksToStorage();
    renderNotes(currentFilter);

    searchInput.value = "";
}

btnSection.addEventListener("click", (e) => {
    const button = e.target.closest(".filter-btn");

    if (button) {
        currentFilter = button.dataset.filter;
        renderNotes(currentFilter);
    }
});

clearList.addEventListener("click", () => {
    taskList.innerHTML = "";
    tasks = [];
    saveTasksToStorage();
    renderNotes();
});

addBtn.addEventListener("click", handleAddTask);

loadTasksFromStorage();

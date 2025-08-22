# ToDo Advanced

## 🔗 Live Link

[ToDo Advanced]()

---

## New Features

-   Cleaner and more simplified **JavaScript flow**
-   Refined **UI**
-   Display **current date** at the top
-   Used **event delegation** to grab dataset values efficiently
-   Task filtering handled with **filter()**
-   When app loads, **All** button is highlighted by default
-   Task count updates dynamically using `filteredTasks.length`
-   Added an **alert** when input is empty

## How the New Features Work (JS Logic)

-   In `handleAddTask()`, a task object is pushed with **id**, **task text**, and **checkbox boolean**.
-   If input is empty - show an alert.
-   Used **event delegation** (`e.target`) to grab dataset values for actions.
-   Tasks are **filtered** based on their boolean state + selected filter button.
-   If no tasks remain → show an **empty state image**.
-   Task count updates by taking the **length** of the filtered list.
-   **Delete button** works by excluding a task that matches the given id (returns a new filtered array).
-   On load, **All button** is active by default - makes it clear we’re inside the **All** category.

---

## Challenges

I tried to break down the logic, dig deeper, and then rebuild it in a **cleaner and more structured way**.

[Detail Explanation](./EXPLAIN.md)

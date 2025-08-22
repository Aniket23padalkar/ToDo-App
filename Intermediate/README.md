# ToDo Intermediate

## Features

-   Local storage
-   Add new tasks
-   Mark tasks as completed using checkboxes
-   Delete individual tasks
-   Task counter (total tasks)
-   Filter categories (All, Active, Completed)
-   **Clear List** button to remove all tasks

## Live Link

[ToDo Basic](https://aniket23padalkar.github.ToDo-App/Intermediate/)

## Description

While building this version I got shocked when I started using Local Storage — the whole code structure changed. That’s when I realized how important it is to learn it early. If I waited to learn later, bigger projects would have been even harder.

## How it works (JavaScript Logic)

I’ve already explained the basics in the Basic version, so here I’ll focus on the new features — mainly Local Storage and filtering.

-   Clicking **Add btn** calls `handleAddTask()`. We trim input, push to tasks array, call `renderTasks()` and then `saveTasksToStorage()`.
-   `saveTasksToStorage()` - saves tasks to local storage.
-   `loadTasksFromStorage()` - loads tasks from local storage.
-   Delete button removes a task from both UI and storage.
-   Checkbox state (checked or not) is saved in storage.
-   Filters (All, Active, Completed) work by checking the task’s boolean value.

## Challenges

-   Filtering tasks correctly with checkboxes.
-   Understanding Local Storage — I struggled a lot, tried different ways, simplified in my own style. Still haven’t fully grasped it, but I know with practice it will click better.

---

[Detail Explanation](./EXPLAIN.md)

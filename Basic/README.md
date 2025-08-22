# ToDo Basic

## Features

-   Add new tasks
-   Mark tasks as completed using checkboxes
-   Delete individual tasks
-   Task counter showing total tasks
-   **Clear List** button to remove all tasks

## Live Link

[ToDo Basic](https://aniket23padalkar.github.io/ToDo-App/Basic/)

## Description

This was a really interesting project to build. I experimented with multiple approaches and finally used the one that made the most sense to me.

In this **basic version**, I didn’t use **localStorage**, so everything works fine, but when the page is refreshed the tasks reset.

## How It Works (JavaScript Logic)

-   Clicking the **Add** button triggers the `handleAddTask()` function
-   Input text is **trimmed** to remove extra spaces
-   A new task element is created dynamically and added to the list
-   Task count is updated using the `children.length` property of the task list
-   **Delete button** removes a task and updates the count
-   **Checkbox** toggles the `completed` class when checked or unchecked
-   **Clear List** button removes all tasks at once

## Challenges

-   Filtering tasks efficiently is important, but I decided to skip it for now to avoid getting confused.

---

[Detail Explanation](./EXPLAIN.md)

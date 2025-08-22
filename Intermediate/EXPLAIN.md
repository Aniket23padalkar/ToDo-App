# Details of How It Works

## Description

The basics (event listeners, DOM updates) were already explained in the Basic version.  
Here, I’ll mainly focus on the new features added in this version — **filtering** and **localStorage**.

### Local Storage

-   I created an empty array of tasks at the top.
-   `saveTasksToStorage()` - sets tasks into storage by stringifying it in key **todoTasks** (cause everything in storage is saved in string/JSON format). I call this function whenever I want to store something.
-   `loadTasksFromStorage()` - loads tasks from storage. First it converts back to JS format, then I run a `forEach` loop on the tasks array and call `renderTask()` with each task.
-   So if there are tasks in storage, it renders them automatically.

When the user clicks **Add btn**:

-   I trim the input (to remove extra spaces).
-   If input is not empty:
    -   I create an object where I store the input text and set a boolean value `false` for the checkbox (default unchecked).
    -   Push this new task into the tasks array.
    -   Call `renderTask()` with this task.
    -   Save it into localStorage by calling `saveTasksToStorage()`.
    -   Finally, clear the input value.

👉 `renderTask()` handles creating the task dynamically.

Delete button:

-   Removes the task from both UI and localStorage.
-   I used `filter()` on the tasks array - it excludes that task and gives me a new array.

### Filtering Tasks

-   In HTML, I added a `data-filter` attribute to each filter button.
-   In JS:
    -   I used `forEach` to add click event listeners on filter buttons.
    -   When a button is clicked:
        -   First remove the `active` class from all buttons.
        -   Then add the `active` class to the clicked one.
        -   Save the clicked button’s `data-filter` value in a variable and call `filterTask()` with it.

Inside `filterTask()`:

-   I select all the list items with `querySelectorAll`.
-   I check the checkbox’s boolean value and store it in `isCompleted`.
-   Then I apply filtering using CSS (`display: flex` or `display: none`).

Conditions for filtering:

-   **All** - Show all tasks.
-   **Active** - If task is checked - hide it, else show it.
-   **Completed** - If task is checked - show it, else hide it.

---

## Final Thought

-   Filtering tasks works properly with checkboxes.
-   Local Storage was the real challenge. I struggled a lot, tried different approaches, then simplified it in my own way.
-   Still not 100% confident with it — but I know with more practice, it will click better.

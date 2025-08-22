# Detail Explanation

-   First, I selected all the elements in JavaScript where I needed to make dynamic changes.
-   I added an event listener on the **Add** button which called the `handleAddTask()` function.
-   Inside `handleAddTask()`, I trimmed the input to remove extra spaces.
-   Then I created a new task dynamically.
-   After creating a task, I updated the count and reset the input to empty.

-   I created a function `taskCount()` that updates the total task count.
-   For this, I used the `children.length` property on the task list.

-   Added a **change event listener** to the checkbox it toggles the `completed` class on the task text.
-   The **Delete button** removes the task and updates the count.

-   **Clear List** button removes all tasks and updates the count.
-   Tasks can also be added using the **Enter key** on the keyboard.

---

## Final Thoughts

I avoided filtering tasks for now because I told myself — one step at a time. Once I’m fully clear with the base logic, I’ll add filters in the next level. That way I don’t get confused or stuck.

This project was really interesting and helped me learn:

-   How to create elements dynamically
-   How to maintain and update a task count

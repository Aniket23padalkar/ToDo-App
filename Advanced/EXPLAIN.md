# Detail Explanation

## Description

Here my main focus will be to explain **new features**, because I already covered the basic features in the **Basic** and **Intermediate** versions.

---

### Filtering Tasks

-   On top I created a `let` variable named `currentFilter = "All"`.  
    (If I set it to `null`, then tasks won’t render properly because the filter conditions can’t be applied — and the count will also fail to update.)
-   I added an event listener to the parent container (**event delegation**) to grab the dataset `filter` attribute.
-   Stored that dataset filter into `currentFilter` and passed it to `renderNotes()`.
-   Inside rendering, first I set `taskList.innerHTML = ""` so it clears before re-rendering.
-   If we use `.filter()`, it gives us a **new array every time**, so I stored that array into a `filteredTasks` variable (which is set to an empty array by default).
-   Then I applied conditions:

    -   `currentFilter = "All"` - just copy the full `tasks` array into `filteredTasks`.
    -   `currentFilter = "Active"` - filter `tasks` for unchecked checkboxes - store in `filteredTasks`.
    -   `currentFilter = "Completed"` - filter `tasks` for checked checkboxes - store in `filteredTasks`.

-   Finally, I had to run `.forEach()` on `filteredTasks`.  
    (If I don’t, filtering won’t work and I’ll just keep seeing **all tasks**, because I’d still be rendering the original `tasks` array.)
-   So this is basically how filtering is working in my app.

---

### Filtered Task Count

-   I created an **empty state image** dynamically whenever `filteredTasks.length === 0`, and also updated `countTasks.textContent = 0`.
-   At first, I was again applying filters on the `tasks` array just to get the count.  
    But then I realized I already stored filtered results in `filteredTasks`, so I should just directly apply `.length` on that.
-   Shockingly it worked — and the code got **shorter and more efficient**. That was a big “aha” moment for me.

---

## Final Thoughts

This project really made me think deeper. I’m not just _coding_, I’m breaking things down, asking _what if’s_, and actually understanding the **flow** of what’s going on. Honestly, that feels like a big achievement for me.

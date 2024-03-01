## To-Do List Application

This is a simple to-do list application implemented using React. It allows users to add tasks, mark them as complete, and filter tasks based on their completion status.

### Before

The code for this application includes comments that explain how it works. You can follow the comments to understand the implementation. The `TodoList` component can be found in the `src/components/TodoList` directory. To see an example of the application, run `npm start`.

### Implementation

To implement this application, follow these steps:

1. Create a new React component called `TodoList`.
2. Import the `useState` hook from the `react` package.
3. Inside the `TodoList` component, declare two state variables using the `useState` hook: `tasks` and `inputValue`. Initialize `tasks` with an empty array and `inputValue` with an empty string.
4. Implement the `handleInputChange` function to update the `inputValue` state variable whenever the input field value changes.
5. Implement the `handleAddTask` function to add a new task to the `tasks` array when the "Add Task" button is clicked. The new task should have a unique `id`, the `text` from the `inputValue`, and a `completed` property set to `false`. After adding the task, clear the `inputValue`.
6. Implement the `handleToggleComplete` function to toggle the `completed` property of a task when its corresponding checkbox is clicked.
7. Implement the `handleFilterTasks` function to filter the tasks based on the selected filter. The function should return the filtered tasks array.
8. Render the input field, "Add Task" button, and task list using JSX. Use the `handleFilterTasks` function to filter the tasks based on the selected filter. Display each task as a list item with its `text` and a checkbox to toggle its completion status. Apply a line-through style to completed tasks.
9. Add buttons or links to filter the tasks: "All", "Completed", and "Incomplete". When clicked, call the `handleFilterTasks` function with the corresponding filter value.

### Key Concepts

- State management: Use the `useState` hook to manage the list of tasks and the input field value.
- Handling user input: Implement event handlers to update the state based on user input.
- Conditional rendering: Use the `handleFilterTasks` function to filter and display tasks based on their completion status.

Feel free to customize the styling and add any additional features to enhance the application.

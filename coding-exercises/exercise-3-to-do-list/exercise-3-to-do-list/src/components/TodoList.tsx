import React, { useState, ChangeEvent } from 'react';

/**
 * Represents a task in the to-do list.
 */
interface Task {
    id: number;
    text: string;
    completed: boolean;
}

/**
 * Represents the TodoList component.
 */
const TodoList: React.FC = () => {
    // State variables
    const [tasks, setTasks] = useState<Task[]>([]); // Array of tasks
    const [inputValue, setInputValue] = useState<string>(''); // Input value for adding tasks
    const [filter, setFilter] = useState<string>('all'); // Filter for displaying tasks

    /**
     * Handles the change event of the input field.
     * @param e - The change event object
     */
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    /**
     * Handles the click event of the "Add Task" button.
     */
    const handleAddTask = () => {
        setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue('');
    };

    /**
     * Handles the toggle complete event of a task.
     * @param id - The ID of the task to toggle complete
     */
    const handleToggleComplete = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    /**
     * Filters the tasks based on the selected filter.
     * @returns The filtered tasks
     */
    const handleFilterTasks = () => {
        switch (filter) {
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'incomplete':
                return tasks.filter(task => !task.completed);
            default:
                return tasks;
        }
    };

    // Render the TodoList component
    return (
        <div>
            {/* Input field for adding tasks */}
            <input type="text" value={inputValue} onChange={handleInputChange} />
            {/* Button for adding tasks */}
            <button onClick={handleAddTask}>Add Task</button>
            {/* List of tasks */}
            <ul>
                {handleFilterTasks().map(task => (
                    <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {/* Checkbox for toggling task completion */}
                        <input type="checkbox" checked={task.completed} onChange={() => handleToggleComplete(task.id)} />
                        {/* Task text */}
                        {task.text}
                    </li>
                ))}
            </ul>
            {/* Filter buttons */}
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
    );
};

export default TodoList;
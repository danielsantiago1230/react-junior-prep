import React, { useState, ChangeEvent } from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [filter, setFilter] = useState<string>('all');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue('');
    };

    const handleToggleComplete = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

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

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {handleFilterTasks().map(task => (
                    <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <input type="checkbox" checked={task.completed} onChange={() => handleToggleComplete(task.id)} />
                        {task.text}
                    </li>
                ))}
            </ul>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
    );
};

export default TodoList;
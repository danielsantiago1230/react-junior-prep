import React, { useState } from 'react';

const List = () => {
    // states
    const [items, setItems] = useState<string[]>(['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10']);
    const [input, setInput] = useState<string>('');

    const handleAdd = () => {
        setItems([...items, input]);
        // this will clear the input field
        setInput('');
    };

    const handleDelete = () => {
        // this will remove the first occurrence of the input
        const index = items.findIndex(item => item === input);
        if (index !== -1) {
            setItems([...items.slice(0, index), ...items.slice(index + 1)]);
        }
        setInput('');
    };

    return (
        <div>
            <h2>List of the items</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Add or delete an item"
            />

            <button onClick={handleAdd}>Add item</button>
            <button onClick={handleDelete}>Delete item</button>

            <p>
                keep in mind that the delete button will remove the first occurrence of the input.
            </p>
        </div>
    );
}

export default List;
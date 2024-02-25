# Exercise 2: Adding and deleting items from the list.

## Objective

Create a simple React application that allows users to add and delete items from a list. The aim is to understand how to manage state and handle user input in React.

**Note:** I'm reaping the steps from creating the React app, so we can practice the process again. If you already have a React app set up, you can skip to the implementation steps.

## Implementation

## Step 1: Create the React App

1. **Initialize the React Application:** Use `create-react-app` with TypeScript to set up your project environment quickly. Run the following command in your terminal:

```bash
    npx create-react-app exercise-2-adding-and-deleting-items-from-list --template typescript
```

This command creates a new React application named `exercise-2-adding-and-deleting-items-from-list` with TypeScript setup.

2. **Navigate to Your Project:** Change your current directory to the new project:

```bash
    cd exercise-2-adding-and-deleting-items-from-list
```

3. **Install Dependencies:** Run the following command in your terminal to install the necessary dependencies:

```bash
    npm install
```

4. **Start the App:** Now, you can start the application to see if everything works correctly:

```bash
    npm start
```

After running `npm start`, your application should open in your default web browser. If it doesn't, you can manually navigate to `http://localhost:3000` to view your app.


## Step 2: Implement the List Component with Add and Delete Functionality

1. **Create a Components Folder:** Inside the `src` directory of your project, create a new folder named `components`. This folder will organize your React component files.

2. **Create the List Component:** Inside the `components` folder, create a TypeScript file named `List.tsx`. This file will contain your List component.

3. **Importing Dependencies:** The necessary dependencies are imported. React and useState are imported from the 'react' library. useState is a Hook that lets you add React state to function components.

```tsx
import React, { useState } from 'react';
```

4. **Creating the Component:** The List component is defined as a functional component. Inside this component, two pieces of state are declared using the useState hook: `items` and `input`.

```tsx
const List = () => {
    const [items, setItems] = useState<string[]>(['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10']);
    const [input, setInput] = useState<string>('');
```

5. **Adding Items:** The `handleAdd` function is defined. This function is called when the "Add item" button is clicked. It adds the current input value to the `items` array and then clears the input field.

```tsx
const handleAdd = () => {
    setItems([...items, input]);
    setInput('');
};
```

6. **Deleting Items:** The `handleDelete` function is defined. This function is called when the "Delete item" button is clicked. It removes the first occurrence of the input value from the `items` array and then clears the input field.

```tsx
const handleDelete = () => {
    const index = items.findIndex(item => item === input);
    if (index !== -1) {
        setItems([...items.slice(0, index), ...items.slice(index + 1)]);
    }
    setInput('');
};
```

7. **Rendering the Component:** The List component returns a JSX element that includes a title, a list of items, an input field, and two buttons. The input field's value is tied to the input state, and its onChange handler updates the input state. The "Add item" button's onClick handler calls handleAdd, and the "Delete item" button's onClick handler calls handleDelete.

```tsx
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
```
8. ***Exporting the Component***: Finally, the List component is exported so it can be used in other parts of the application.

```tsx
export default List;
```

### Conclusion
 This completes the implementation of the List component. It demonstrates how to manage state and handle user input in a React functional component. The useState hook is used to manage the list of items and the current input value. The handleAdd and handleDelete functions demonstrate how to update state based on user input.


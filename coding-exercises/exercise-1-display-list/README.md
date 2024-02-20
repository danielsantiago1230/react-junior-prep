# Exercise 1: Display List of Items

## Objective

Create a simple React application that displays a list of items. The aim is to understand the differences between class and functional components in practice.

# Implementation

## Step 1: Create the React App

1. **Initialize the React Application:** Use `create-react-app` with TypeScript to set up your project environment quickly. Run the following command in your terminal:

    ```bash
    npx create-react-app exercise-1-display-list --template typescript
    ```

    This command creates a new React application named `exercise-1-display-list` with TypeScript setup.

2. **Navigate to Your Project:** Change your current directory to the new project:

    ```bash
    cd exercise-1-display-list
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

## Step 2: Create the FunctionalComponentList Component

1. **Create a Components Folder:** Inside the `src` directory, create a new folder named `components`. This is where we'll keep our component files.

2. **Create the FunctionalComponentList Component:** Inside the `components` folder, create a new file named `FunctionalComponentList.tsx`. In this file, define a functional component that takes an `items` prop and returns a list of those items.

3. **Import and Render the FunctionalComponentList Component:** Open the `App.tsx` file and import the `FunctionalComponentList` component at the top. Then, render the `FunctionalComponentList` component inside the `App` component, passing in an array of items as a prop.

4. **Check the Output:** Run your application with `npm start` and open your web browser to `http://localhost:3000`. You should see your list of items displayed on the page.

## Step 3: Create the ClassComponentList Component

1. **Create the ClassComponentList Component:** Inside the `components` folder, create a new file named `ClassComponentList.tsx`. In this file, define a class component that takes an `items` prop and returns a list of those items.

3. **Import and Render the FunctionalComponentList Component:** Open the `App.tsx` file and import the `ClassComponentList.tsx` component at the top. Then, render the `ClassComponentList` component inside the `App` component, passing in an array of items as a prop.

4. **Check the Output:** Run your application with `npm start` and open your web browser to `http://localhost:3000`. You should see your list of items displayed on the page.

## Understanding the ClassComponentList Component

The `ClassComponentList` is a class-based React component. It's defined as a class that extends `React.Component`, which is the base class for React components.

The component initializes an `items` state, which is an array of strings. These items are displayed as a list in the component's render method.

Here's a breakdown of the component:

1. **State Initialization:** In the constructor of the component, we initialize the state with an `items` property. This is where we store the items that will be displayed in the list.

    ```jsx
    constructor(props) {
        super(props);
        this.state = {
            items: ['Item 1', 'Item 2', 'Item 3'],
        };
    }
    ```

2. **Render Method:** The `render` method is a required method in class components. This is where we define what the component should render. In this case, we're rendering a list of items. We use the `map` function to create a new `<li>` element for each item in the `items` array.

    ```jsx
    render() {
        return (
            <div>
                <h2>Class Component List</h2>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
    ```

    Note that we're using `this.state.items` to access the items. In class components, the state and props are always accessed through `this`.

In summary, the `ClassComponentList` component initializes an array of items in its state and renders a list of these items.

## Understanding the FunctionalComponentList Component

The `FunctionalComponentList` is a functional React component. It's defined as a function that returns a React element.

The component uses the `useState` hook to initialize an `items` state, which is an array of strings. These items are displayed as a list in the component's return statement.

Here's a breakdown of the component:

1. **State Initialization:** The `useState` hook is used to create a state variable `items`. This hook takes the initial state as its argument and returns an array with two elements: the current state and a function to update it. In this case, we're only interested in the current state, so we ignore the update function by not including it in the destructuring assignment.

    ```jsx
    const [items] = useState(['Item1', 'Item2', 'Item3']);
    ```

2. **Render Method:** In functional components, the return statement defines what the component should render. In this case, we're rendering a list of items. We use the `map` function to create a new `<li>` element for each item in the `items` array.

    ```jsx
    return (
        <div>
            <h2>Functional Component List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
    ```

In summary, the `FunctionalComponentList` component initializes an array of items in its state using the `useState` hook and renders a list of these items.




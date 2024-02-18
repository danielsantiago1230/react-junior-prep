# Day 1: React Basics, Components, and Props

## Introduction to React

### What is React and why is it used?

React is a powerful JavaScript library specifically designed for building user interfaces (UIs) of web applications. While not a full-fledged framework, it provides essential tools and concepts for creating interactive and efficient UIs. React allows you to design simple views for each state in your application, and it will efficiently update and render the right components when your data changes.

It means that you can create individual components (like a button, a form, a navigation bar, etc.) for each part of your UI. Each of these components can have different "states". For example, a button might have a "clicked" state and a "not clicked" state. The strength of React lies in its ability to update and render these components when their state changes. For example, if a user clicks a button (changing its state), React can update just that button on the page, without needing to refresh the entire page. This makes React applications very efficient and provides a smooth user experience.

React is used because of its flexibility and efficiency:
 * Reusable components: React is built around the concept of components. A component is a self-contained piece of code that manages its own structure, style, and functionality. Once you've created a component, you can reuse it throughout your application. This makes your code more modular, faster to write, and easier to maintain.
 * Efficient updates: React uses a concept called the Virtual DOM (Document Object Model). When the state of an object changes, React first updates the Virtual DOM, then it compares the current Virtual DOM with the new one and updates only the real DOM objects that have changed. This diffing process results in fewer direct manipulations of the real DOM, leading to better performance and a smoother user experience.
 * Large community and ecosystem: React has a large and active community of developers. This means there are plenty of resources for learning and getting help. The ecosystem also includes many libraries and tools built specifically for React, which can help you add complex features to your application more easily.
 * Adaptability: React isn't just for web development. With React Native, you can use the same style of components to build native mobile apps. This means you can use the same team and largely the same codebase to build both your web app and your mobile app.

popular applications that use React:
 * Facebook
 * Instagram
 * Netflix
 * Airbnb
 * Uber

### Explain the concept of a virtual DOM and how React uses it.

Before getting into the concept of virtual DOM and its usage in React, let me provide a brief introduction to what DOM is.
* The DOM is a tree-like representation of a webpage. It's what you interact with when you want to change the content, structure, or style of the webpage using JavaScript. However, these changes can be slow because they often require the browser to recalculate the layout of the entire page.

So React uses the concept of Virtual DOM where an ideal, or "virtual", representation of the DOM. When state changes in a React component, the entire UI is virtually re-rendered. But instead of making changes to the real DOM directly, React first constructs a new Virtual DOM and compares it with the previous one. This process is called "diffing".

In this diffing stage, React figures out which objects have changed. This diffing algorithm is a key feature of React that provides its high performance. Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM.

By minimizing direct manipulations of the real DOM and only updating parts of the DOM that need to change, React makes the application faster and more efficient. This is because interacting with the real DOM is slow while interacting with the JavaScript Virtual DOM is much faster.

In simpler terms:
* Think of the virtual DOM as a draft version of your UI changes. React checks the differences between drafts, then applies only the necessary changes to the final version (the real DOM). This saves time and effort, making your React app faster and more efficient.

Remember:
* The virtual DOM is an in-memory representation, not a replacement for the real DOM.
React uses the virtual DOM for efficiency and performance optimization, not for security or data persistence.



## React Components

### What are components in React?

In simple terms, components in React are like LEGO blocks. Each block (or component) is a piece of your website. Just like how you can combine LEGO blocks to build different structures, you can combine components to build different parts of your website. The great thing about components is that you can reuse them. So if you have a part of your website that appears multiple times, you can just create one component and use it multiple times.

So a component in React is a reusable piece of code that controls a part of the UI of an application. Each component is a JavaScript function or class that optionally accepts inputs, called 'props', and returns a React element that describes how a section of the UI should appear.

There are two types of components in React:
* Functional components: These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function.
* Class components: These are more complex features. They are ES6 classes. In addition to rendering UI, class components have other features like lifecycle methods and state.

Purpose:
* Break down complex UIs into manageable, reusable pieces.
* Encapsulate data and logic for specific UI elements.
* Promote modularity and maintainability of your code.

Structure:
* Defined as functions or classes.
* Can accept input data through props (properties).
* Return JSX (JavaScript XML) describing the UI structure.
* Can have an internal state that determines their rendering.

Benefits:
* Reusable: Use the same component multiple times with different props.
* Maintainable: Changes to one component don't affect others.
* Declarative: Describe what the UI should look like, React handles updates.
* Composable: Combine components to build complex UIs.

Examples:
* Button component
* Card component
* Navigation bar component
* Form component

The main idea behind components is the ability to reuse code, have separation of concerns, and abstract complexity. Components allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.

### Class Components vs. Functional Components

In simple terms:
 * Functional components: These are simple components that are just like plain LEGO blocks. They are easy to use and understand.
 * Class components: These are like special LEGO blocks with extra features. They can do more things, but are a bit more complex.

Class Components:
 * Defined as ES6 classes.
 * Have lifecycle methods (like componentDidMount, componentDidUpdate, componentWillUnmount).
 * Have their own state, initialized in the constructor.
 * Use the render method to return JSX.

Example:
```jsx
class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return <div>{this.state.count}</div>;
    }
}
```

Functional Components:
* Defined as JavaScript functions.
* Don't have lifecycle methods (but can replicate lifecycle behavior using React Hooks like useEffect).
* Don't have their own state (but can have state using the useState Hook).
* Directly return JSX.
```jsx
function MyFunctionalComponent() {
  const [count, setCount] = React.useState(0);

  return <div>{count}</div>;
}
```

Key Differences:
* Class components require more code and are more complex due to lifecycle methods and this keyword.
* Functional components are simpler, easier to read and test.
* Functional components can use React Hooks, a feature not available in class components.
* Class components might still be necessary for more complex use cases, but most modern React development favors functional components due to their simplicity and the power of Hooks.

### How do you handle lifecycle methods in class components?

(Your answer)

## Props

### What are props in React?

(Your answer)

### How do you pass props from a parent component to a child component?

(Your answer)

### Can props be modified within a component? Explain.

(Your answer)


# Timer Component

## Objective
Build a timer component that allows users to start, stop, and reset a timer.

## Key Concepts
- `useEffect` for side effects
- State management with `useState`
- Lifecycle methods with hooks

## Implementation

1. Use `useState` to manage the timer's count and its active state.
2. Implement the timer logic using `useEffect` to start an interval when the timer is active and clean it up on component unmount or when the timer is stopped.
3. Provide buttons to start, stop, and reset the timer.


## Timer Component

I provied the comments in the code to help you understand the implementation. So in order to test the component, you can simply open the exercise-4-timer-component folder in your terminal and run the following command:

```bash
npm start
```

## especifications

- The timer should start at 0 when the component mounts.
- The timer should increment every second when the start button is clicked.
- The timer should stop incrementing when the stop button is clicked.
- The timer should reset to 0 when the reset button is clicked.
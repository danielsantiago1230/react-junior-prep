import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
    // states
    const [count, setCount] = useState(0); // state to hold the count value
    const [isActive, setIsActive] = useState(false); // state to track if the timer is active or not

    // this effect will run when the component mounts & when isActive or count changes
    useEffect(() => {
        // interval to update the count every second
        let interval: NodeJS.Timeout | null = null;

        // if isActive is true, start the interval
        if (isActive) {
            interval = setInterval(() => {
                // update the count by incrementing it by 1
                setCount(count => count + 1);
            }, 1000);
        // if isActive is false, clear the interval
        } else if (!isActive && count !== 0) {
            clearInterval(interval!);
        }

        // cleanup the interval
        return () => clearInterval(interval!);
    }, [isActive, count]);

    const handleStart = () => {
        setIsActive(true); // set isActive to true to start the timer
    };

    const handleStop = () => {
        setIsActive(false); // set isActive to false to stop the timer
    };

    const handleReset = () => {
        setIsActive(false); // set isActive to false to stop the timer
        setCount(0); // reset the count to 0
    };

    return (
        <div>
            <h2>Timer: {count} Seconds</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default TimerComponent;
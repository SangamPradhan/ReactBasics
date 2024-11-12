import React from "react";

const CounterApp = () => {
    const [num, setNum] = React.useState(0);

    const handleCount = () => {
        setNum(num + 1);
    };

    const resetCounter = () => {
        setNum(0);
    };

    return (
        <>
            <h1>Count: {num}</h1>
            <button onClick={handleCount}>Increase Number</button>
            <button onClick={resetCounter}>Reset Number</button>
        </>
    );
};

export default CounterApp;

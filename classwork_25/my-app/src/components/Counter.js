import { useState, useEffect } from "react";

const Counter = ({defaultValue = 0}) => {
    const [count, setCount] = useState(defaultValue);

    useEffect(() => {
        console.log("effect 2", count);    
    }, [count]);

    useEffect(() => {
        setCount(defaultValue);
    }, [defaultValue]);

    const handleIncrement = () => {
        setCount(prevValue => prevValue + 1);
    };

    const handleDecrement = () => {
        setCount(prevValue => prevValue - 1);
    };

    return (
        <div>
            <p>Value: {count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement} disabled={count === 0}>-</button>
        </div>
    )
};

export default Counter;

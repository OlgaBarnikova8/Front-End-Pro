import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

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

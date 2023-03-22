import { useState } from "react";

const CountButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevValue => prevValue + 1);
    }

    return <button onClick={handleClick}>Clicked {count} times</button>;
};

export default CountButton;

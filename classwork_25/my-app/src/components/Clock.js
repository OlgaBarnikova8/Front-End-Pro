import { useState, useEffect } from "react";

const formatDate = (date) => date.toLocaleTimeString();

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const refreshTime = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshTime, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

    return <p>Date now: {formatDate(date)}</p>;
};

export default Clock;

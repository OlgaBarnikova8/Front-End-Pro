import { useState, useEffect } from "react";
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(data => {
            setTodos(data);
            setLoading(false);
          })
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {todos.map(({ id, title}) => (
                <li key={id}>{title}</li>
            ))}
        </ul>
    );
};

export default TodoList;

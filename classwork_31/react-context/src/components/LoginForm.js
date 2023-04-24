import { useState, useContext } from "react";
import AuthContext from "../context/auth/AuthContext";

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = ({ target: { value } }) => {
        setUsername(value);
    };

    const handleChangePassword = ({ target: { value } }) => {
        setPassword(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser({ username, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Username <input type="text" value={username} onChange={handleChangeUsername}/></label>
            <label>Password <input type="password" value={password} onChange={handleChangePassword}/></label>
            <button type="submit">Login</button>
        </form>
    )
};

export default LoginForm;

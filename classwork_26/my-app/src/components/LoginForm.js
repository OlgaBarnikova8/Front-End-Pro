import { useRef } from "react";

const LoginForm = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Username", usernameRef.current.value);
        console.log("Password", passwordRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Username: <input type="text" ref={usernameRef}/></label>
            <label>Password: <input type="password" ref={passwordRef}/></label>
            <button type="submit">Send</button>
            <button type="reset">Reset</button>
        </form>        
    )          
};

export default LoginForm;

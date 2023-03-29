import { useState } from "react";

const RegistrationForm = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmValue, setConfirmValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (event) => {  
        if (errorMessage) {
            setErrorMessage("");
        }

        setEmailValue(event.target.value);        
    };

    const handlePasswordChange = (event) => {     
        if (errorMessage) {
            setErrorMessage("");
        }

        setPasswordValue(event.target.value);        
    };

    const handleConfirmChange = (event) => {    
        if (errorMessage) {
            setErrorMessage("");
        }

        setConfirmValue(event.target.value);        
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (emailValue === "" || passwordValue === "") {
            setErrorMessage("You need to fill all fields");
            return;
        }

        if (passwordValue !== confirmValue) {
            setErrorMessage("confirm password");
            return;
        }

        console.log({email: emailValue, password: passwordValue, confirm: confirmValue});
    };

    const handleReset = (event) => {  
        setEmailValue('');
        setPasswordValue('');
        setConfirmValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email: <input type="email" name="email" value={emailValue} onChange={handleEmailChange} /></label>
            <br />
            <label>Password: <input type="password" name="password" value={passwordValue} onChange={handlePasswordChange}/></label>
            <br />
            <label>Confirm password: <input type="password" name="confirm" value={confirmValue} onChange={handleConfirmChange}/></label>
            {errorMessage && <div className='error'>{errorMessage}</div>}
            <br />
            <button type="submit">Send</button>            
            <button type='button' onClick={handleReset}>Reset</button>
        </form>
    )
};

export default RegistrationForm;

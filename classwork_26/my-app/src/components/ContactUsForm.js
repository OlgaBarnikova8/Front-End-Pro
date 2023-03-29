import { useState } from 'react';

const ContactUsForm = () => {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [countryValue, setCountryValue] = useState("ua");
    const [errorMessage, setErrorMessage] = useState("");

    const handleNameChange = ({ target: { value }}) => {
        if (errorMessage) {
            setErrorMessage("");
        }

        setNameValue(value);
    };
    
    const handleEmailChange = ({ target: { value }}) => {
        if (errorMessage) {
            setErrorMessage("");
        }

        // if (!emailValue.includes("@")) {
        //     setErrorMessage("Please, enter valid email");
        //     return;
        // }
        setEmailValue(value);
    };

    const handleCountryChange = ({ target: { value }}) => {
        setCountryValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (nameValue === "" || emailValue === "") {
            setErrorMessage("You need to fill all fields");
            return;
        }
        
        console.log({ name: nameValue, email: emailValue, country: countryValue });
    };

    const handleReset = (event) => {        
        setNameValue('');
        setEmailValue('');
    };

    return (
        <form onSubmit={handleSubmit} > 
            <h4>Contact us</h4>
            <label>Name: <input type="text" name="name" value={nameValue} onChange={handleNameChange} /></label>
            <br />
            <label>Email: <input type="email" name="email" value={emailValue} onChange={handleEmailChange} /></label>
            <br />
            <select value={countryValue} onChange={handleCountryChange}>
                <option value="ua">Ukraine</option>
                <option value="pl">Poland</option>
                <option value="en">England</option>
            </select>
            {errorMessage && <div className='error'>{errorMessage}</div>}
            <br />
            <button type="submit">Send</button>
            <button type='button' onClick={handleReset}>Reset</button>
        </form>
    )
};

export default ContactUsForm;

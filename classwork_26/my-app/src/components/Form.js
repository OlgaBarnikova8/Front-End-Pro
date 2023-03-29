import { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleChange = ({ target: { value, name } }) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input name="firstName" value={form.firstName} onChange={handleChange} />
            </div>
            <div>
                <input name="lastName" value={form.lastName} onChange={handleChange} />
            </div>
            <div>
                <input name="email" value={form.email} onChange={handleChange} />
            </div>

            <button type="submit">Send</button>
        </form>        
    );
};

export default Form;

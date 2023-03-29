import { useState, useRef } from "react";

// const NameForm = () => {
//     const [value, setValue] = useState("Olga");

//     const handleChange = (event) => {        
//         setValue(event.target.value);        
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("Name", {value});
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Name: <input type="text" name="name" value={value} onChange={handleChange} /></label>

//             <button type="submit">Send</button>
//         </form>
//     )
// };

const NameForm = () => {
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name", inputRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: <input type="text" name="name" ref={inputRef}/></label>
        
            <button type="submit">Send</button>
        </form>        
    )               
};

export default NameForm;

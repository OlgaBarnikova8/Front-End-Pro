import { useState } from "react";

const Input = () => {
    const [value, setValue] = useState('');

    const handleChahge = (event) => {         
        setValue(event.target.value);      
    }

    return (
        <>
          <input type="text" value={value} onChange={handleChahge} />
          <p>{value}</p>
        </>
    )
};

export default Input;

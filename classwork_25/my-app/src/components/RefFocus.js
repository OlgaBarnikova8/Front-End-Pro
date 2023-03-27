import { useRef } from "react";

const RefFocus = () => {
    const inputRef = useRef();

    const handleSetFocus = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text"/>
            <button onClick={handleSetFocus}>Set focus</button>
        </div>
    )
};

export default RefFocus;

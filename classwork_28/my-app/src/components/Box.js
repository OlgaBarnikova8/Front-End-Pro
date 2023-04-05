import { useState } from "react";
import cs from "classnames";

const Box = () => {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div>
            <button onClick={handleClick}>Toogle box</button>
            <div className={cs({ "active" : isOpen })}>Box</div>
        </div>
    );    
};

export default Box;

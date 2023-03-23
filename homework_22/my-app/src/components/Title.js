import PropTypes from "prop-types";
// import { useState } from "react";

// const Title = ({ name,  fontWeight, children}) => {
//     const [isOpened, setOpened] = useState(false);

//     const handleClick = () => {
//         setOpened(true);        
//     };

//     return (
//         <>  
//           <div className="container">{isOpened ? <h2 style={{ fontWeight }}>{name} {children}</h2> : "Closed title"}</div>   
//           {!isOpened && <button onClick={handleClick} className="btn">Open title</button>}   
//         </>
//     )     
// }

const Title = ({ name,  fontWeight, children}) => {
    return <h2 style={{ fontWeight }}>{name} {children}</h2>;
}

Title.propTypes = {
    name: PropTypes.string.isRequired,    
    fontWeight: PropTypes.oneOf(["bold", "normal"]),    
    children: PropTypes.node
};

export default Title;

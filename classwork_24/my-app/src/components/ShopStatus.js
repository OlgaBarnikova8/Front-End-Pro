import { useState } from "react";

const ShopStatus = () => {
  const [isOpened, setOpened] = useState(false);

//   if (isOpened) {
//      return <p>Shop opened</p>
//   } 

//   return (
//     <p>Shop closed</p>
//   )

//ternary
const handleClick = () => {
    setOpened(true);
};

return (
  <>
    <p>{isOpened ? "Shop opened" : "Shop closed"}</p>   
    {!isOpened && <button onClick={handleClick}>Open</button>}   
  </>
  )    
};

export default ShopStatus;

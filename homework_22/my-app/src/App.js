import { useState } from "react";

import './App.css';
import Title from './components/Title';


function App() {
  const [isOpened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);        
  };

  return (
    <>    
      <div className="container">{isOpened ? <Title name="David Copperfield"  fontWeight="normal" /> : "Closed title"}</div>   
      {!isOpened && <button onClick={handleClick} className="btn">Open title</button>}   

      <div className="container">{isOpened ? <Title name="Jane Air">English book</Title> : "Closed title"}</div>   
      {!isOpened && <button onClick={handleClick} className="btn">Open title</button>}  
    </> 
  )    
}

export default App;

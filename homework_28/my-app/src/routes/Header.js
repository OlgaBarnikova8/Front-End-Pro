import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../context/auth/AuthContext";
import UserInfo from "../components/UserInfo";
import LoginForm from "../components/LoginForm";

const Header = () => {
  const [isOpened, setOpened] = useState(false);  
  const { isLoggedIn } = useContext(AuthContext); 

  const openLoginForm = () => setOpened(true);
  const closeLoginForm = () => setOpened(false);

  return (
    <div>
      <nav className="nav">       
        <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Home page</NavLink>
        <NavLink className={({isActive}) => isActive ? "active" : ""} to="users">Users</NavLink>        
        <NavLink className={({isActive}) => isActive ? "active" : ""} to="hotels">Hotels</NavLink>
        {isLoggedIn ? <UserInfo /> : <button onClick={openLoginForm}>Login</button>}
        {!isLoggedIn && isOpened && <LoginForm onClose={closeLoginForm}/>} 
      </nav>    
    </div>
  )
};

export default Header;

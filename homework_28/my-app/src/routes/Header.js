import { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../context/auth/AuthContext";
import UserInfo from "../components/UserInfo";

const Header = () => {

 const { isLoggedIn } = useContext(AuthContext); 

  return (
    <div>
      <nav className="nav">       
        <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Home page</NavLink>
        <NavLink className={({isActive}) => isActive ? "active" : ""} to="users">Users</NavLink>        
        <NavLink className={({isActive}) => isActive ? "active" : ""} to="hotels">Hotels</NavLink>
        {isLoggedIn ? <UserInfo /> : <NavLink className={({isActive}) => isActive ? "active" : ""} to="login">Login</NavLink>}
      </nav>    
    </div>
  )
};

export default Header;

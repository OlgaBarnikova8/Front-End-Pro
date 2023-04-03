import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="nav">       
        <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Home page</NavLink>
        <NavLink className={({isActive}) => isActive ? "active" : ""} to="users">Users</NavLink>        
        <NavLink className={({isActive}) => isActive ? "active" : ""} to="hotels">Hotels</NavLink>
      </nav>    
    </div>
  )
};

export default Header;

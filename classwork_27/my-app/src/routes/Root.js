import { NavLink, Outlet } from "react-router-dom";
import LoginForm from "./LoginForm";

const Root = () => {
    return (
        <div>
            <h1>React Router</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Home page</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" : ""} to="about">About page</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" : ""} to="contacts/1">Contact 1</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" : ""} to="contacts/2">Contact 2</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" : ""} to="products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" : ""} to="categories">Categories</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" : ""} to="login">Login</NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
};

export default Root;

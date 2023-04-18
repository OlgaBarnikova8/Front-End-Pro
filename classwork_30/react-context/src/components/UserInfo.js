import { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";

const UserInfo = () => {
    const { userInfo, logoutUser } = useContext(AuthContext);

    return (
        <div>
            <h4>User</h4>
            <ul>
                <li>ID: {userInfo.id}</li>
                <li>Name: {userInfo.firstName} {userInfo.lastName}</li>
                <li>Email: {userInfo.email}</li>
                <li>Gender: {userInfo.gender}</li>
            </ul>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
};

export default UserInfo;

import { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";

const UserInfo = () => {
    const { userInfo, logoutUser } = useContext(AuthContext);

    return (
        <div className="userInfo_container">   
            <button onClick={logoutUser}>Logout</button>          
            <img src={userInfo.image} alt="" className="login-img" />                                   
        </div>
    )
};

export default UserInfo;

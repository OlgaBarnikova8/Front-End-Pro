import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { getUserId } from "../api";

const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getUserId(userId).then((data) => {
            console.log(data);
            setUser(data);            
            setLoading(false);
        });
    }, [userId]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="user_container">
            <Link to="/users">Back to users</Link>
            <h3>{user.firstName} {user.lastName}</h3> 
            <p>age: {user.age}</p>      
            <p>gender: {user.gender}</p>   
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>  
            <p>birthday: {user.birthDate}</p> 
            <img src={user.image} alt="" className="profile-img" /> 
            <p>company: {user?.company?.name}</p> 
            <a href={`http://www.${user.domain}/`} target="blank">{user.domain}</a>           
        </div>
    )
};

export default User;

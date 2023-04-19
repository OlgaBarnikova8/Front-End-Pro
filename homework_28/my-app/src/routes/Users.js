import { useState, useEffect  } from "react";
import { useNavigate } from 'react-router-dom';
import {getUsers} from "../api";

const Users = () => {
    
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleClick = (userId) => () => {        
         navigate(`/users/${userId}`);
    }

    useEffect(() => {
        getUsers().then((data) => {            
            setUsers(data);            
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>    
        <div>
            <table>
                <thead>
                    <tr>
                        <td>FirstName</td>
                        <td>LastName</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Show more</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>  
                        <td>{user.email}</td>
                        <td>{user.phone}</td> 
                        <td><button onClick={handleClick(user.id)}>Show more</button></td> 
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>   
    )
};

export default Users;

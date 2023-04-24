import { useMemo } from "react";
import PropTypes from "prop-types";

const UserStatistics = ({ users, isActive }) => {
    const totalAmount = useMemo(() => users.length, [users]);
    const averageAge = useMemo(() => {
      return (
        users.reduce((accumulator, currentValue) => {
          console.log("reduce");  
          return accumulator + currentValue.age;
        }, 0) / users.length
      ); 
      }, [users]);    

    console.log("render component");

    return (
      <div>
        <p>Total amount of users: {totalAmount}</p>
        <p>Average age: {averageAge}</p>
        <p>User status: {isActive ? 'Active' : 'Inactive'}</p>
      </div>)
};

UserStatistics.propTypes = {
    users: PropTypes.array.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default UserStatistics;

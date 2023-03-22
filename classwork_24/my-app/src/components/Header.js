//if-else
// const Header = ({ isLoggedIn}) => {
//     let content;
//     if (isLoggedIn) {
//         content = "Username";
//     } else {
//         content = <button>Log in</button>;
//     }
    
//     return <div>{content}</div>;
// };


//ternary
const Header = ({ isLoggedIn}) => {
        return <div>{isLoggedIn ? "Username" : <button>Log in</button>}</div>;
}   

export default Header;

import { useContext, useState } from 'react';
import { Button } from "@mui/material";
import AuthContext from './context/auth/AuthContext';
import './App.css';

import ThemeValue from './components/ThemeValue';
import Switcher from './components/Switcher';
import ButtonTheme from './components/ButtonTheme';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import UserStatistics from './components/UserStatistics';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const [users, setUsers] = useState([
    {
      name: "Maks",
      age: 38,
    },
    {
      name: "Helga",
      age: 39,
    },
    {
      name: "Igor",
      age: 34,
    }
  ]);
  const [isActive, setActive] = useState(false);
  
  const handleToogle = () => {
    setActive(prevState => !prevState);    
  };

  return (
    <div className="App">   
      <ThemeValue />
      <Switcher />
      <ButtonTheme>Click me</ButtonTheme>
      {isLoggedIn ? <UserInfo /> : <LoginForm />}
      <UserStatistics users={users} isActive={isActive}/>
      <Button onClick={handleToogle}>Toogle status</Button>
    </div>
  );
}

export default App;

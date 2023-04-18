import { useContext } from 'react';
import AuthContext from './context/auth/AuthContext';
import './App.css';

import ThemeValue from './components/ThemeValue';
import Switcher from './components/Switcher';
import Button from './components/Button';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">   
      <ThemeValue />
      <Switcher />
      <Button>Click me</Button>
      {isLoggedIn ? <UserInfo /> : <LoginForm />}
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ProductsList from './components/ProductsList';
import MountExample from './components/MountExample';
import Clock from './components/Clock';
import RefFocus from './components/RefFocus';
import Input from './components/Input';

function App() {
  const [count, setCount] = useState(10);

  const handleResetCounter = () => {
    setCount(0);
  };

  const [isOpened, setOpened] = useState(true);

  const handleHideMounting = () => {
    setOpened(false);
  };

    return (
    <div>  
      <ShoppingList />
      <p>Counter App: {count}</p>
      <button onClick={handleResetCounter}>Reset counter</button>
      <Counter />
      <TodoList /> 
      <ProductsList />
      {isOpened && <MountExample />}
      <button onClick={handleHideMounting}>hide mounting component</button>
      {isOpened && <Clock />}
      <button onClick={handleHideMounting}>hide CLOCK</button>
      <RefFocus />
      <Input />
    </div>    
  );
}

export default App;

import PrintName from './components/PrintName';
import Game from './components/Game';

import './App.css';

function App() {  
  return (
    <div className="App">
      <PrintName name="Markiza" stringFirst='abc' stringSecond="abcd"></PrintName>  
      <PrintName name="Markiza" stringFirst='abcd' stringSecond="cdfe"></PrintName>
      <PrintName name="Markiza" stringFirst='abc' stringSecond="wbbcc"></PrintName>  
      <PrintName name="Markiza" stringFirst='abc' stringSecond="abc"></PrintName>
      <Game />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcom';
import Title from './components/Title';

function App() {
  const name = "Olga";

  return (
    <div>
      <h1>Hello, {name}!!!</h1>
      <Welcome name="Maksim" lastname="Barnikov"/>
      <Welcome name="Igor" type="italic" />
      <Welcome name="Nina" color='green' />
      <Title name="David Copperfield"  fontWeight="normal" />
      <Title name="Jane Eyre" />
    </div>    
  );
}

export default App;

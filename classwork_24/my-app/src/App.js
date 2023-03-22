import './App.css';
import Welcome from './components/Welcom';
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import Header from './components/Header';
import ShopStatus from './components/ShopStatus';
import CountButton from './components/CountButton';
import Counter from './components/Counter';


function App() {

    return (
    <div>   
      <Welcome name="Maksim" lastname="Barnikov"/>    
      <Welcome name='Olga'>Hello world</Welcome>     
      <Title name="David Copperfield"  fontWeight="normal" />    
      <ShoppingList />
      <Header isLoggedIn/>
      <Header />
      <ShopStatus />
      <CountButton />
      <Counter />
    </div>    
  );
}

export default App;

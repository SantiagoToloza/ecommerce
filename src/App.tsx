import './App.css';
import { ShoppingCartProvider } from './components/contentext/EcommerceC';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShoppingCartProvider>
          <HomePage />
        </ShoppingCartProvider>
      </header>
    </div>
  );
}

export default App;

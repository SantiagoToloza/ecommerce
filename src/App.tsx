import './styles/App.scss';
import { ShoppingCartProvider } from './components/contentext/EcommerceC';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './components/contentext/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div>
        <header className="header">
          <ShoppingCartProvider>
            <HomePage />
          </ShoppingCartProvider>
        </header>
      </div >
    </ThemeProvider>
  );
}

export default App;

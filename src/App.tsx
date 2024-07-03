import './styles/App.scss';
import { ShoppingCartProvider } from './components/contentext/EcommerceC';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './components/contentext/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProductPage from './pages/AddProductPage';
import Test from './pages/Test';

function App() {
  return (
    <ThemeProvider>
      <div>
        <header className="header">
          <ShoppingCartProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-product" element={<AddProductPage />} />
                <Route path='/Test' element={<Test></Test>} />
              </Routes>
            </Router>
          </ShoppingCartProvider>
        </header>
      </div >
    </ThemeProvider>
  );
}

export default App;

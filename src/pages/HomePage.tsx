import React, { useState } from 'react';
import { ProductList } from '../../src/components/ProductList';
import '../styles/pages/_home.scss'
import { ShoppingCart } from '../components/ShoppingCart';
import { useShoppingCart } from '../components/contentext/EcommerceC';
import '../styles/components/_buttons.scss'
import '../styles/pages/_home.scss'
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const { state, darkMode, setDarkMode } = useShoppingCart();

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };
    const goToAddProductPage = () => {
        navigate('/add-product');
    };

    return (
        <div className={darkMode ? 'dark-mode ' : ''}>
            <header className='title' >
                <h1 className='titlehome'>Welcome to Our Store</h1>
                <button onClick={toggleDarkMode}>Toggle with dark Mode</button>
                <button onClick={goToAddProductPage}>Add Product</button>
            </header >
            <main className='container'>
                <section  >
                    <ShoppingCart />
                </section>
                <h2>Products</h2>
                <section className='section'>
                    <ProductList products={state.products} />
                </section>
                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            </main>
        </div >
    );
};

export default HomePage;

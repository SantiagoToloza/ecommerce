import React from 'react';
import { ProductList } from '../../src/components/ProductList';
import '../styles/pages/_home.scss'
import { ShoppingCart } from '../components/ShoppingCart';

const HomePage: React.FC = () => {
    return (
        <div>
            <header className='title'>
                <h1>Welcome to Our Store</h1>
            </header>
            <main className='main'  >
                <section  >
                    <ShoppingCart />
                </section>
                <h2>Products</h2>
                <section className='section'>
                    <ProductList />
                </section>
            </main>
        </div>
    );
};

export default HomePage;

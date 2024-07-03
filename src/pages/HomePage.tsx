import React from 'react';
import { ProductList } from '../../src/components/ProductList';
import '../styles/pages/_home.scss'

const HomePage: React.FC = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Our Store</h1>
            </header>
            <main>
                <h2>Products</h2>
                <section className='section'>
                    <ProductList />
                </section>
                <aside style={{ flex: '1 1 35%', paddingLeft: '20px' }}>
                    <h2>Your Cart</h2>
                    {/* <ShoppingCart /> */}
                </aside>
            </main>
        </div>
    );
};

export default HomePage;

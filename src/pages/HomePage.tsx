import React from 'react';
import { ProductList } from '../../src/components/ProductList';
// import { ShoppingCart } from './ShoppingCart';

const HomePage: React.FC = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Our Store</h1>
            </header>
            <main style={{ display: 'flex', justifyContent: 'space-between' }}>
                <section style={{ flex: '1 1 60%' }}>
                    <h2>Products</h2>
                    <ProductList />
                </section>
                <aside style={{ flex: '1 1 35%', paddingLeft: '20px' }}>
                    <h2>Your Cart</h2>

                    {/* //We need to make the cart */}
                    {/* <ShoppingCart /> */}
                </aside>
            </main>
        </div>
    );
};

export default HomePage;

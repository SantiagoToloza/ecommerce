import React, { useState } from 'react';
import { useShoppingCart } from '../components/contentext/EcommerceC';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

import '../styles/components/_addProductPage.scss'

const AddProductPage: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');
    const { dispatch } = useShoppingCart();

    const goToAddProductPage = () => {
        navigate('/');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newProduct: Product = {
            id: Date.now(),
            name,
            price: parseFloat(price),
            amount: parseInt(amount, 10),
        };
        dispatch({ type: 'ADD_PRODUCT', product: newProduct });
    };

    return (
        <div className="add-product-page">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Product</button>
                <button onClick={goToAddProductPage}>
                    Home
                </button >
            </form>
        </div>
    );
};

export default AddProductPage;

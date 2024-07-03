// ProductItem.tsx
import React from 'react';
import { Product } from '../types';
import { useShoppingCart } from '../components/contentext/EcommerceC';
import '../styles/components/_buttons.scss'
import '../styles/pages/_home.scss'

interface ProductItemProps {
    product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const { dispatch } = useShoppingCart();

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', product });
    };

    return (
        <div className='cards'>
            <div className='cards '>picture</div>
            <h2 className='title'>{product.name}</h2>
            <p>{product.price}</p>
            <button className='button' onClick={addToCart} >Add to Cart</button>
        </div>
    );
};
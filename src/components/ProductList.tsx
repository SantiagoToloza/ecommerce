import React from 'react';
import { Products } from '../types';
import productsData from '../data/products';
import { ProductItem } from './ProductItem';
import '../styles/abstracts/_grid.scss'
const products: Products = productsData;

export const ProductList: React.FC = () => {
    return (
        <div className='grid'>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

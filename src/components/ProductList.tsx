import React from 'react';
import { Products } from '../types';
import productsData from '../data/products';
import { ProductItem } from './ProductItem';

const products: Products = productsData;

export const ProductList: React.FC = () => {
    return (
        <div>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

import React from 'react';
import { Product } from '../types';
import { ProductItem } from './ProductItem';
import '../styles/abstracts/_grid.scss'
interface ProductListProps {
    products: Product[];
}


export const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className='grid'>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

import React from 'react';
import { useShoppingCart } from '../components/contentext/EcommerceC';
import '../styles/components/_shoppingCart.scss';
import '../styles/abstracts/_grid.scss'
import '../styles/components/_buttons.scss'

export const ShoppingCart: React.FC = () => {
    const { state, dispatch } = useShoppingCart();

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <div>

            <h2>Shopping Cart</h2>
            <div className="shopping-cart">
                {state.cart.length === 0 ? (
                    <p>The cart is empty.</p>
                ) : (
                    state.cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: item.id })}>Remove</button>
                        </div>
                    ))
                )}
            </div>
            {state.cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
        </div >
    );
};
import React, { createContext, useContext, useReducer, ReactNode, useState, useEffect } from 'react';
import { State, Action } from '../../types';
import productsData from '../../data/products';
const initialState: State = {
    cart: [],
    products: productsData,
};

const loadStateFromLocalStorage = (): State => {
    try {
        const serializedState = localStorage.getItem('shoppingCartState');
        if (serializedState === null) {
            return initialState;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Could not load state from localStorage:', err);
        return initialState;
    }
};
const saveStateToLocalStorage = (state: State) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('shoppingCartState', serializedState);
    } catch (err) {
        console.error('Could not save state to localStorage:', err);
    }
};




const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.cart.find(item => item.id === action.product?.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.product?.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.product, quantity: 1 }],
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id),
            };
        case 'CLEAR_CART':
            return { ...state, cart: [] };
        case 'ADD_PRODUCT':
            if (action.product) {
                return {
                    ...state,
                    products: [...state.products, action.product],
                };
            }
            return state;
        default:
            return state;
    }
};

const ShoppingCartContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
} | undefined>(undefined);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, loadStateFromLocalStorage());
    const [darkMode, setDarkMode] = useState<boolean>(false);
    useEffect(() => {
        saveStateToLocalStorage(state);
    }, [state]);
    return (
        <ShoppingCartContext.Provider value={{ state, dispatch, darkMode, setDarkMode }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error('Error fatal :C');
    }
    return context;
};
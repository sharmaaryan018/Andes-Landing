import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Initialize state with items from localStorage or empty array
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cartItems');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    // Update localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (service) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === service.id);
            if (existingItem) {
                const updatedItems = prevItems.map(item =>
                    item.id === service.id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                );
                return updatedItems;
            }
            return [...prevItems, { ...service, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id);
            return;
        }
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]); // This will automatically clear localStorage due to the useEffect
    };

    const cartTotal = cartItems.reduce(
        (total, item) => {
            const price = item.unit === 'piece' || item.unit === 'pair' 
                ? item.discountedRateByPiece 
                : item.discountedRateByKg;
            return total + (price * item.quantity);
        }, 0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart, // Add the new function to the context
                cartTotal,
                cartCount: cartItems.reduce((count, item) => count + item.quantity, 0)
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
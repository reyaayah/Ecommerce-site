import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem("cartItems");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existing = prevItems.find((i) => i.id === item.id);
            if (existing) {
                // Increase quantity if item exists
                return prevItems.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: Number(i.quantity || 1) + 1 }
                        : i
                );
            }
            // Add new item with quantity at least 1
            return [...prevItems, { ...item, quantity: Number(item.quantity) > 0 ? Number(item.quantity) : 1 }];
        });
    };

    const removeFromCart = (index) => {
        setCartItems((prev) => prev.filter((_, i) => i !== index));
    };

    const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Number(item.quantity || 1) + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);

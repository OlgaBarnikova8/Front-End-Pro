import { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = {
    amount: 0,
    products: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "add": {
            const newProduct = action.payload;
            const productIndex = state.products.findIndex(
                (product) => product.id === newProduct.id
            );

            if (productIndex !== -1) {
                const products = [...state.products];
                products[productIndex].count += 1;
                return {
                    ...state,
                    products
                };
            }

            return {
                amount: state.amount + 1,
                products: [...state.products, { ...newProduct, count: 1 }],
            };
        }
            
        case "remove": {
            const id = action.payload;
            const newProducts = state.products.filter((product) => product.id !== id);
            
            return {
                products: newProducts,
                amount: newProducts.length,
            }
        }

        default:
            return initialState;        
    }
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;

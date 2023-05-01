import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

const useCart = () => {
    const [state, dispatch] = useContext(CartContext);

    const addToCart = (newProduct) => {
        dispatch({ type: "add", payload: newProduct});
    };

    const removeFromCart = (id) => {
        dispatch({ type: "remove", payload: id });
    };

    return {
        state,
        addToCart,
        removeFromCart,
    }
};

export default useCart;

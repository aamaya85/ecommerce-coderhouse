import { useState, createContext } from "react";

export const CartContext = createContext()

const CartContextComponent = ({children}) => {

    const [ cart, setCart ] = useState(0)

    const addProduct = () => {
        setCart((qty) => qty + 1)
    }

    const removeProduct = () => {
        if (cart > 0) setCart((qty) => qty - 1)
    }

    let data = {
        cart,
        addProduct,
        removeProduct
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextComponent
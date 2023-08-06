import { useState, createContext } from "react";

export const CartContext = createContext()

const CartContextComponent = ({children}) => {

    const [ cart, setCart ] = useState([])

    const addProduct = (product, quantity) => {
        const exists = cart.some((item) => item.id === product.id)
        let updatedCart = [...cart]
        if (exists) updatedCart = cart.filter((item) => item.id !== product.id)
        updatedCart.push({...product, quantity: quantity})
        setCart(updatedCart)
    }

    const removeProduct = (idProduct) => {
        const updatedCart = cart.filter((item) => item.id !== idProduct)
        setCart(updatedCart)
    }

    const getTotalAmount = () => {
        let total = cart.reduce((acumm, item) => {
            return acumm + (item.price * item.quantity)
        }, 0)
        return total
    }

    const getTotalItems = () => {
        let total = cart.reduce((acumm, item) => {
            return acumm + item.quantity
        }, 0)
        return total
    }

    const emptyCart = () => {
        setCart([])
    }

    let data = {
        cart,
        addProduct,
        removeProduct,
        getTotalAmount,
        getTotalItems,
        emptyCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextComponent
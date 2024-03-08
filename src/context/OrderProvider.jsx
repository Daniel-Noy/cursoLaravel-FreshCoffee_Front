import { createContext, useState } from "react";

const OrderContext = createContext()

export const OrderProvider = ({ children })=> {
    const [ order, setOrder ] = useState([])

    const addCartProduct = (product, amount) => {
        const copyProduct = {...product}
        copyProduct.amount = amount
        setOrder([...order, copyProduct])
    }

    const removeCartProduct = (productId) => {
        const updatedProducts = order.filter(product => product.id !== productId)
        setOrder(updatedProducts)
    }

    const updateCartProduct = (productId, amount) => {
        const updatedProducts = order.map(product => {
            if( product.id === productId ) {
                product.amount = amount
            }
            return product
        })

        setOrder(updatedProducts)
    }

    return(
        <OrderContext.Provider
            value={{
                order,
                addCartProduct,
                removeCartProduct,
                updateCartProduct
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext
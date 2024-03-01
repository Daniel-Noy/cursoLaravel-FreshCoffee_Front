import { createContext, useState } from "react";

const OrderContext = createContext()

export const OrderProvider = ({ children })=> {
    const [ order, setOrder ] = useState([])

    const addCartProduct = (product, amount) => {
        const copyProduct = {...product}
        copyProduct.amount = amount
        setOrder([...order, copyProduct])
    }

    return(
        <OrderContext.Provider
            value={{
                order,
                addCartProduct
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext
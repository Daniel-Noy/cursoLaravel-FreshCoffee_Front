import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify'
import { totalOrder } from "../helpers";
import axiosClient from "../config/axios";


const OrderContext = createContext()

export const OrderProvider = ({ children })=> {
    const [ order, setOrder ] = useState([])
    const [ total, setTotal ] = useState(0)

    useEffect(()=> {
        setTotal(totalOrder(order))
    }, [order])


    //? ---- CRUD Order ----
    const addCartProduct = (product, amount) => {
        const copyProduct = {...product}
        copyProduct.amount = amount
        setOrder([...order, copyProduct])
        toast.success('Producto Agregado')
    }

    const removeCartProduct = (productId) => {
        const updatedProducts = order.filter(product => product.id !== productId)
        setOrder(updatedProducts)
        toast.info('Producto eliminado')
    }

    const updateCartProduct = (productId, amount) => {
        const updatedProducts = order.map(product => {
            if( product.id === productId ) {
                product.amount = amount
            }
            return product
        })

        setOrder(updatedProducts)
        toast.info('Orden Actualizada')
    }

    const sendOrder = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        const { data } = await axiosClient.post('/orders', {
            orderProducts: order.map( product =>{
                return { id: product.id, amount: product.amount}
            }),
            total: total
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(!data.status) {
            return toast.error('Hubo un error al procesar tu pedido')
        }
        setOrder([])
        return toast.success('Pedido recibido, se enviará en unos minutos')
        
    }

    return(
        <OrderContext.Provider
            value={{
                order,
                addCartProduct,
                removeCartProduct,
                updateCartProduct,
                total,
                sendOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext
import { createContext, useState } from "react"
import { useEffect } from "react";
import axiosClient from "../config/axios"

const KioskContext = createContext();

export const KioskProvider = ({ children })=> {
    //? Estados de categorias
    const [ categories, setCategories ] = useState([])
    const [ currentCategory, setCurrentCategory ] = useState({})

    //? Estado del producto seleccionado
    const [ selectedProduct, setSelectedProduct] = useState({})

    //? Estado del modal
    const [ modal, setModal ] = useState(false)

    //? Filtra las categorias
    const handleClickCategory = (id) => {
        const filteredCategory = categories.filter(category => category.id === id)[0]
        setCurrentCategory(filteredCategory)
    }

    const handleClickModal = () => setModal(!modal)
    const getProductModal = (product) => setSelectedProduct(product)

    const getCategories = async ()=> {
        try {
            const {data} = await axiosClient.get('/categories')
            setCategories(data.data)
            setCurrentCategory(data.data[0])
        } catch {
            console.error('Error en el servidor');
        }
    }
    
    useEffect(()=> {
        getCategories()
    }, [])

    return(
        <KioskContext.Provider
            value={{
                categories,
                currentCategory,
                selectedProduct,
                modal,
                handleClickCategory,
                handleClickModal,
                getProductModal
            }}
        >
        {children}
        </KioskContext.Provider>
    )
}

export default KioskContext
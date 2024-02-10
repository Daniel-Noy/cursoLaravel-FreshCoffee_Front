import { createContext, useState } from "react"
import {categories as categoriesDB} from '../data/categories'

const KioskContext = createContext();

export const KioskProvider = ({ children })=> {
    //? Estados de categorias
    const [ categories, setCategories ] = useState(categoriesDB)
    const [ currentCategory, setCurrentCategory ] = useState(categories[0])

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
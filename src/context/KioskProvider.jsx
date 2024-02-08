import { createContext, useState } from "react"
import {categories as categoriesDB} from '../data/categories'

const KioskContext = createContext();

export const KioskProvider = ({ children })=> {
    const [ categories, setCategories ] = useState(categoriesDB)
    const [ currentCategory, setCurrentCategory ] = useState(categories[0])

    const handleClickCategory = (id) => {
        const filteredCategory = categories.filter(category => category.id === id)[0]
        setCurrentCategory(filteredCategory)
    }

    return(
        <KioskContext.Provider
            value={{
                categories,
                currentCategory,
                handleClickCategory
            }}
        >
        {children}
        </KioskContext.Provider>
    )
}

export default KioskContext
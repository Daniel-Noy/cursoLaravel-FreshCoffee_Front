import useKiosk from "../../hooks/useKiosk"

export default function Category( {category} ) {
    const { id, icon, name } = category
    const { handleClickCategory, currentCategory } = useKiosk()

    return (
        <button 
        onClick={()=> { handleClickCategory(id) }}
        className={`flex items-center gap-4 w-full p-3 hover:bg-amber-300 cursor-pointer active:bg-amber-400 transition-colors duration-100
                    ${currentCategory.id === id ? 'bg-amber-300' : ''}`}
        >
            <img 
            className="w-12 h-11"
            src={`/img/icons/icono_${icon}.svg`} 
            alt="Icono Categoria" />

            <p className="text-lg font-bold truncate">{name}</p>
        </button>
    )
}
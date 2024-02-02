export default function Category( {category} ) {
    const {icon, name} = category
    return (
        <div className="flex items-center gap-4 w-full p-3 hover:bg-amber-300 cursor-pointer active:bg-amber-400 transition-colors duration-100">
            <img 
            className="w-12 h-11"
            src={`/img/icons/icono_${icon}.svg`} 
            alt="Icono Categoria" />

            <p className="text-lg font-bold truncate">{name}</p>
        </div>
    )
}
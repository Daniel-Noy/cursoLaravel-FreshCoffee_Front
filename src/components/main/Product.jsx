import { numberToPrice } from "../../helpers"
import useKiosk from "../../hooks/useKiosk"


export default function Product( {product} ) {
    const { name, price, image } = product
    const { handleClickModal, getProductModal } = useKiosk()

    return (
        <div className="p-3 border shadow bg-white grid grid-cols-1">
            <img 
                className="w-full"
                src={`/img/images/${image}.jpg`}
                alt={`Imagen ${name}`}
            />
            
            <div className="p-5 flex flex-col justify-between">
                <h3 className="text-2xl font-bold">{ name }</h3>
                <p className="mt-5 font-black text-4xl text-amber-400">
                    {numberToPrice(price)}
                </p>
            </div>

            <button
            className="self-end w-full mt-5 p-3 uppercase font-bold bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white transition-colors"
            type="button"
            onClick={()=> {
                handleClickModal()
                getProductModal(product)
            }}
            >
                Agregar
            </button>
        </div>
    )
}
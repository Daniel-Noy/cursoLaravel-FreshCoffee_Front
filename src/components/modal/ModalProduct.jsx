import { useState } from "react"
import { numberToPrice } from "../../helpers"
import useKiosk from "../../hooks/useKiosk"

export const ModalProduct = ( { product }) => {
    const { name, price, image, category_id, id } = product
    const { handleClickModal } = useKiosk()
    const [amount, setAmount] = useState(1)

    const updateAmount = (increment = true)=> {
        if(!increment && amount <= 1) return
        let update

        increment
            ? setAmount(amount + 1)
            : setAmount(amount - 1)
    }

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <img
                src={`/img/images/${image}.jpg`}
                alt={`Imagen Producto: ${name}`} 
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button className="p-1 hover:bg-slate-100 active:bg-slate-200 rounded-full transition-colors"
                        onClick={handleClickModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>

                <h1 className="mt-3 text-3xl font-bold">
                    { name }
                </h1>
                <p className="mt-5 font-black text-5xl text-amber-500">
                    { numberToPrice(price) }
                </p>

                <div className="flex items-center gap-4 mt-5">
                    
                    {/* //?Decrement button */}
                    <button className="p-1 hover:bg-slate-300 active:bg-slate-400 rounded-full transition-colors active:transition-none"
                        onClick={()=> updateAmount(false)}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>

                    <p className="text-3xl min-w-8 text-center">{ amount }</p>

                    {/* //? Increment button */}
                    <button className="p-1 hover:bg-slate-300 active:bg-slate-400 rounded-full transition-colors"
                        onClick={updateAmount}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>

                </div>

                <button 
                    className="px-5 py-2 mt-5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold uppercase rounded"
                    type="button"
                    >
                    Añadir al Pedido
                </button>
            </div>

        </div>
    )
}

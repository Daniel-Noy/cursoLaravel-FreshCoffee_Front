import { numberToPrice, subTotal } from "../../helpers"
import useKiosk from "../../hooks/useKiosk"
import useOrder from "../../hooks/useOrder"
import { DeleteButtonSm } from "../buttons/DeleteButtonSm"
import { EditButtonSm } from "../buttons/EditButtonSm"

export const SummaryProduct = ({ product }) => {
    const { handleClickModal, getProductModal } = useKiosk()
    const { removeCartProduct } = useOrder()

    const {id, name, price, amount, image} = product
    const sub = subTotal(price, amount)

    return (
        <div className="flex gap-3 rounded shadow-sm overflow-hidden min-h-40 ">
            <img
                className="w-24 object-cover"
                src={`/img/images/${image}.jpg`}
                alt={`Imagen Producto: ${name}`} 
            />

            <div className="py-3 px-1">
                <h3 className="font-bold text-lg leading-none">{name}</h3>

                <div className="my-1">
                    <div className="flex justify-between mr-2">
                        <p className="font-semibold text-xs">
                            Precio:
                            <span className="font-normal"> {numberToPrice(price)}</span>
                        </p>

                        <p className="text-xs font-semibold">
                            {`${amount}${amount === 1 ? 'pza' : 'pzas'}`}
                        </p>
                    </div>

                    <p className="font-bold text-xl text-amber-400">
                        SubTotal: 
                        <span className="font-black"> {numberToPrice(sub)}</span>
                    </p>
                </div>

                <div className="flex gap-2">
                    <EditButtonSm clickEvent={()=> {
                        handleClickModal()
                        getProductModal(product)
                    }}/>
                    <DeleteButtonSm clickEvent={()=> removeCartProduct(id)}/>
                </div>
            </div>

        </div>
    )
}

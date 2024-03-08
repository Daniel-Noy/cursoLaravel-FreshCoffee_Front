import useOrder from '../../hooks/useOrder'
import SubmitButton from '../forms/SubmitButton';
import { SummaryProduct } from './SummaryProduct'
import { totalOrder, numberToPrice } from '../../helpers';

export default function Summary() {
    const { order } = useOrder()
    

    return (
        <aside className=" grid grid-rows-summaryGrid w-96 h-screen p-5">
            <h2 className='text-2xl text-center font-black'>Resumen del pedido</h2>

            <div className="mt-10 flex flex-col gap-4 min-h overflow-y-auto scrollbar-thin shadow-md">
                { order.length === 0
                ? 
                    (
                    <p className="text-2xl text-center my-5">
                        Agrega productos a tu pedido para mostrar un resumen y el total
                    </p>
                    )
                : 
                    (
                    <>
                        {order.map( product => (
                            <SummaryProduct key={product.id} product={product}/>
                        ))}
                        
                    </>
                    )
                }
            </div>
            {order.length !== 0 && (
            <div>
                <p className='text-xl mt-7 p-2 shadow font-bold text-amber-400'>
                    Total:
                    <span className='font-black'> {numberToPrice(totalOrder(order))}</span>
                </p>

                <form className='w-full'>
                    <div className="mt-1">
                        <SubmitButton value='Confirmar pedido' action={null}/>
                        
                    </div>
                </form>
            </div>
            )}
        </aside>
    )
}
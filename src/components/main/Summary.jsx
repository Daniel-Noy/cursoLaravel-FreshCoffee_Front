import useOrder from '../../hooks/useOrder'
import SubmitButton from '../forms/SubmitButton';

export default function Summary() {
    const { order } = useOrder()

    return (
        <aside className="w-72 h-screen overflow-y-scroll p-5">
            <h1 className='text-4xl font-black'>Resumen del pedido</h1>

            <div className="py-10">
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
                        <p className='text-xl mt-10'>
                            Total {''}
                        </p>

                        <form className='w-full'>
                            <div className="mt-5">
                                <SubmitButton value='Confirmar pedido' action={null}/>
                                
                            </div>
                        </form>
                    </>
                    )
                }
            </div>
        </aside>
    )
}
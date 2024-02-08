import Product from '../../components/main/Product';
import { products as data } from '../../data/products'
import useKiosk from '../../hooks/useKiosk';

export default function Inicio() {
    const { currentCategory } = useKiosk()
    const products = currentCategory.id !== 0
        ? data.filter(product => product.category_id === currentCategory.id)
        : data

    return (
        <>
            <h1 className="text-4xl font-black">{ currentCategory.name }</h1>
            <p className='text-2xl my-10'>
                Elige y personaliza tu pedido
            </p>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {
                    products.map(product => (
                        <Product
                        key={product.id}
                        product={product}
                        />
                    ))
                }
            </div>
        </>
    )
}

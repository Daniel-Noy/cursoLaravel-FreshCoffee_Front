import Product from '../../components/main/Product';
import { products } from '../../data/products'

export default function Inicio() {
    return (
        <>
            <h1 className="text-4xl font-black">Inicio</h1>
            <p className='text-2xl my-10'>
                Elige y personaliza tu pedido
            </p>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {products.map(product => (
                    <Product
                    key={product.id}
                    product={product}
                    />
                ))}
            </div>
        </>
    )
}

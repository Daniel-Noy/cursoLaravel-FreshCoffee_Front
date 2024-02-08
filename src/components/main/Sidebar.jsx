import useKiosk from '../../hooks/useKiosk'
import Category from './Category'
export default function Sidebar() {
	const { categories } = useKiosk()
	
	return (
		<aside className="md:w-72">
            <div className="p-4">
                <img 
                className="w-40"
                src="img/icons/logo.svg"
                alt="" />
            </div>

			<div className="mt-10 divide-y border">
				{categories.map(category => (
					<Category key={category.id} category={category}/>
				))}
			</div>

			<div className="my-5">
				<button 
				className='w-full p-3 text-center font-bold bg-red-500 hover:bg-red-600 active:bg-red-700 text-white truncate'
				type="button"
				>
					Cancelar Orden
				</button>
			</div>
        </aside>
	)
}

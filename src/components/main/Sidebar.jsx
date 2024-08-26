import useKiosk from '../../hooks/useKiosk'
import Category from './Category'
import { useAuth } from '../../hooks/useAuth'

export default function Sidebar() {
	const { categories } = useKiosk()
	const { logout, user } = useAuth({ middleware: 'auth'})
	return (
		<aside className="md:w-72">
            <div className="p-4">
                <img 
                className="w-40"
                src="img/icons/logo.svg"
                alt="Logo" />
            </div>

			<p className='my-10 text-xl text-center font-black'>Hola: {user?.name}</p>

			<div className="mt-10 divide-y border">
				{categories.map(category => (
					<Category key={category.id} category={category}/>
				))}
			</div>

			<div className="my-5">
				<button 
				className='w-full p-3 text-center font-bold bg-red-500 hover:bg-red-600 active:bg-red-700 text-white truncate'
				type="button"
				onClick={logout}
				>
					Cancelar Orden
				</button>
			</div>
        </aside>
	)
}

import { Link, useLocation } from "react-router-dom";

export default function AuthNav() {
    const url = useLocation()
    const classes = 'text-indigo-600 hover:text-indigo-500'
    return (
        <nav className="mt-5">
                {url.pathname === '/auth/login' ? (
                    <p>
                        ¿No tienes cuenta?
                        <Link to={'/auth/registro'} className={classes} > Crea una</Link>
                    </p>
                )
                : (
                    <p>
                        ¿Ya tienes cuenta? 
                        <Link to={'/auth/login'} className={classes} > Inicia Sesión</Link>
                    </p>
                )
                }
        </nav>
    )
}

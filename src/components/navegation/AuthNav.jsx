import { Link } from "react-router-dom";

export default function AuthNav() {
    return (
        <nav className="mt-5">
            <p>
                ¿No tienes cuenta?
                <Link to="/auth/registro"> Crea una</Link>
            </p>
        </nav>
    )
}

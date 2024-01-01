import FormField from "../../components/forms/FormField"
import SubmitButton from "../../components/forms/SubmitButton"
import AuthNav from "../../components/navegation/AuthNav"

export default function Login() {
    return (
        <>
            <h1 className="text-4xl font-black">Iniciar Sesión</h1>
            <p className="leading-normal">Debes iniciar sesión para hacer un pedido</p>

            <div className="mt-8 px-5 py-10 bg-white shadow-md rounded-md">
                <form action="">
                    <FormField 
                        label="E-mail"
                        placeholder="Tu E-mail"
                        inputName="email"
                        type="email"
                    />
                    <FormField 
                        label="Contraseña"
                        placeholder="Tu contraseña"
                        inputName="password"
                        type="password"
                    />

                    <SubmitButton value="Iniciar Sesión"/>
                </form>

                <AuthNav/>
            </div>
        </>
    )
}

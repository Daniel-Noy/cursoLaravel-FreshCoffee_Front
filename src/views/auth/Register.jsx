import FormField from "../../components/forms/FormField";
import SubmitButton from "../../components/forms/SubmitButton";

export default function Register() {
    return (
        <>
            <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
            <p className="leading-normal">Crea tu Cuenta llenando el formulario</p>

            <div className="mt-8 px-5 py-10 bg-white shadow-md rounded-md">
                <form action="">
                    <FormField 
                        label="Nombre"
                        placeholder="Tu Nombre"
                        inputName="name"
                        type="text"
                    />
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
                    <FormField 
                        label="Confirmar Contraseña"
                        placeholder="Repite tu Contraseña"
                        inputName="password_confirmation"
                        type="password"
                    />

                    <SubmitButton value="Registrarse"/>
                </form>
            </div>
        </>
    )
}
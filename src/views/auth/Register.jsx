import { createRef, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import FormField from "../../components/forms/FormField";
import SubmitButton from "../../components/forms/SubmitButton";
import AuthNav from "../../components/navegation/AuthNav";

export default function Register() {
    const nameRef = createRef()
    const emailRef = createRef()
    const passRef = createRef()
    const passConfirmRef = createRef()

    const [formErrors, setFormErrors] = useState({});
    const { register } = useAuth({ middleware: 'guest', url: '/'})

    const handleSubmit = async e => {
        e.preventDefault()
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value,
            password_confirmation: passConfirmRef.current.value
        }

        register(data, setFormErrors)
    }

    return (
        <>
            <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
            <p className="leading-normal">Crea tu Cuenta llenando el formulario</p>

            <div className="mt-8 px-5 py-10 bg-white shadow-md rounded-md">
                <form onSubmit={handleSubmit}>
                    <FormField 
                        label="Nombre"
                        placeholder="Tu Nombre"
                        inputName="name"
                        type="text"
                        formRef={nameRef}
                        errors={formErrors}
                        />
                    <FormField 
                        label="E-mail"
                        placeholder="Tu E-mail"
                        inputName="email"
                        type="email"
                        formRef={emailRef}
                        errors={formErrors}
                    />
                    <FormField 
                        label="Contraseña"
                        placeholder="Tu contraseña"
                        inputName="password"
                        type="password"
                        formRef={passRef}
                        errors={formErrors}
                    />
                    <FormField 
                        label="Confirmar Contraseña"
                        placeholder="Repite tu Contraseña"
                        inputName="password_confirmation"
                        type="password"
                        formRef={passConfirmRef}
                        errors={formErrors}
                    />

                    <SubmitButton value="Registrarse"/>
                </form>

                <AuthNav/>
            </div>
        </>
    )
}
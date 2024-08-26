import { createRef, useState } from "react"
import FormField from "../../components/forms/FormField"
import SubmitButton from "../../components/forms/SubmitButton"
import AuthNav from "../../components/navegation/AuthNav"
import { useAuth } from "../../hooks/useAuth"

export default function Login() {
    const emailRef = createRef()
    const passRef = createRef()

    const [formErrors, setFormErrors] = useState({});
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    })

    const handleSubmit = async e => {
        e.preventDefault()
        const dataForm = {
            email: emailRef.current.value,
            password: passRef.current.value,
        }

        login(dataForm, setFormErrors)
    }

    return (
        <>
            <h1 className="text-4xl font-black">Iniciar Sesión</h1>
            <p className="leading-normal">Debes iniciar sesión para hacer un pedido</p>

            <div className="mt-8 px-5 py-10 bg-white shadow-md rounded-md">
                {
                    formErrors[0] && (
                        <p className="p-1 mb-3 bg-red-600 text-white">{formErrors[0]}</p>
                    )
                }
                <form onSubmit={handleSubmit}>
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

                    <SubmitButton value="Iniciar Sesión"/>
                </form>

                <AuthNav/>
            </div>
        </>
    )
}

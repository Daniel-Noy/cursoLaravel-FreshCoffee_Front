import { createRef, useState } from "react"
import FormField from "../../components/forms/FormField"
import SubmitButton from "../../components/forms/SubmitButton"
import AuthNav from "../../components/navegation/AuthNav"
import axiosClient from "../../config/axios"

export default function Login() {
    const emailRef = createRef()
    const passRef = createRef()

    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = async e => {
        e.preventDefault()
        const dataForm = {
            email: emailRef.current.value,
            password: passRef.current.value,
        }

        try {
            const { data } = await axiosClient.post('/login', dataForm)
            localStorage.setItem('AUTH_TOKEN', data.token)
            setFormErrors({})
        } catch (error) {
            setFormErrors(error.response.data.errors);
        }
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

import { useEffect } from "react"

export default function FormField( { label, placeholder, type, inputName, formRef, errors = {} } ) {
    const errorClasses = 'border border-red-600'
    return (
        <div className="mb-4">
            <label
                htmlFor={inputName}
                className="text-slate-800"
            >
                {label}:
            </label>

            <input type={type}
                id={inputName}
                className={`mt-2 w-full p-2 bg-gray-50 outline-2 focus-visible:outline focus-visible:outline-indigo-600 ${errors[inputName] && errorClasses}`}
                name={inputName}
                placeholder={placeholder}
                ref={formRef}
            />
            
            {/* Muestra los mensajes de error  */}
            {
                errors[inputName]
                ? errors[inputName].map( (message, i) => ( 
                    <p className="m-0.5 text-sm text-red-600" key={i}>{message}</p>
                ))
                : ''
                
            }
        </div>
    )
}
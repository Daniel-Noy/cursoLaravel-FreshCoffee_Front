import PropTypes  from "prop-types"
export default function FormField( { label, placeholder, type, inputName } ) {
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
                className="mt-2 w-full p-2 bg-gray-50 outline-2 focus-visible:outline focus-visible:outline-indigo-600"
                name={inputName}
                placeholder={placeholder}
            />
        </div>
    )
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired
}
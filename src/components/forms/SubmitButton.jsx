export default function SubmitButton( {value, action, disabled = false}) {
    return (
        <input 
            disabled={disabled}
            onClick={action}
            className={`
            w-full mt-5 p-3 
            bg-indigo-600 hover:bg-indigo-700  active:bg-indigo-800 text-white 
            font-bold uppercase cursor-pointer 
            transition-colors duration-100 active:duration- rounded
            ${disabled && 'disabled:opacity-80'}`}
            type="submit"
            value={value}
        />
    )
}
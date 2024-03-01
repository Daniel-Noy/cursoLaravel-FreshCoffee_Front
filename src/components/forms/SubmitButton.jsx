export default function SubmitButton( {value, action}) {
    return (
        <input 
            onClick={action}
            className="
            w-full mt-5 p-3 
            bg-indigo-600 hover:bg-indigo-700  active:bg-indigo-800 text-white 
            font-bold uppercase cursor-pointer 
            transition-colors duration-100 active:duration- rounded"
            type="submit"
            value={value}
        />
    )
}
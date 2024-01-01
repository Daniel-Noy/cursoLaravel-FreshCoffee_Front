import PropTypes from "prop-types"

export default function SubmitButton( {value}) {
    return (
        <input 
            className="
            w-full mt-5 p-3 
            bg-indigo-600 hover:bg-indigo-700  active:bg-indigo-800 text-white 
            font-bold uppercase cursor-pointer 
            transition-colors duration-100 active:duration-0"
            type="submit"
            value={value}
        />
    )
}

SubmitButton.propTypes = {
    value: PropTypes.string.isRequired,
}

export const PrimaryButtonMd = ({ value, clickEvent }) => {
    
    return (
        <button type="button"
            className="px-5 py-2 mt-5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold uppercase rounded"
            onClick={clickEvent}
        >
            {value}
        </button>
    )
}

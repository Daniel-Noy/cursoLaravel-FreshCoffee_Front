export const DeleteButtonMd = ({ clickEvent, value }) => {
    return (
        <button type="button"
            className="px-5 py-2 mt-5 bg-red-700 hover:bg-red-800 active:bg-red-900 text-white font-bold uppercase rounded"
            onClick={clickEvent}
        >
            {value}
        </button>
    )
}

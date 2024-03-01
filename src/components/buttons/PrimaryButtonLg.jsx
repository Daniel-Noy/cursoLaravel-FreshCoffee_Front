export default function PrimaryButtonLg({ value, clickEvent }) {
    return (
        <button
            type="button"
            className="self-end w-full mt-5 p-3 uppercase font-bold bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white transition-colors"
            onClick={clickEvent}
        >
            {value}
        </button>
    )
}

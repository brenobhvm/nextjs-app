export default function Sidebar() {

    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
            </div>
            <ul className="flex-grow">
            </ul>
            <ul>
            </ul>
        </aside>
    )
}
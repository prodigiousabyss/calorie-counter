import search from '../../assets/svg/search.svg'

export const Topbar = () => {
    return (
        <div
            className="sticky top-0 flex items-start space-y-3 w-full flex-col justify-between border-1 border-black px-3 bg-white
        lg:flex lg:items-center lg:flex-row lg:px-28
        "
        >
            <div className="flex items-center text-3xl font-medium">
                Hello, Pooja!
            </div>
            <div className="flex items-center border-2 rounded-xl">
                <input
                    placeholder="what are you looking for?"
                    className="w-[19rem] rounded-md pl-2 p-2"
                />
                <button className="px-2">
                    <img src={search} alt="search" />
                </button>
            </div>
        </div>
    )
}

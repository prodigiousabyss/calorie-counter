export const Topbar = () => {
    return (
        <div className="pt-4 pl-32 w-11/12">
            <div className="flex items-center justify-between">
                <div className="text-3xl font-medium">Hello, Pooja!</div>
                <input
                    placeholder="Enter your food"
                    className="w-1/4 border-2 rounded-md"
                />
            </div>
        </div>
    )
}

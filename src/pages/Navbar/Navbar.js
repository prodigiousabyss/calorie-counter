import { Icon } from '../../atoms/icon/icons'

export const Navbar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around w-full h-14 bg-slate-50 text-white sm:w-full md:w-24 lg:w-24 sm:h-15 md:h-full lg:h-full sm:fixed md:fixed lg:fixed sm:bottom-0 md:top-0 lg:top-0 md:left-0 lg:left-0 sm:justify-around md:justify-center lg:justify-center sm:flex md:flex lg:flex md:flex-col lg:flex-col md:items-center lg:items-center md:space-y-20 lg:space-y-20 sm:p-4">
            <div>
                <Icon name="home" className="w-8 sm:w-11 lg:w-10 md:w-11" />
            </div>
            <div>
                <Icon name="scan" className="w-8 sm:w-11 lg:w-10 md:w-11" />
            </div>
            <div>
                <Icon name="profile" className="w-8 sm:w-11 lg:w-10 md:w-11" />
            </div>
        </div>
    )
}

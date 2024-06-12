import home from '../../assets/svg/home.svg'
import scan from '../../assets/svg/scan.svg'
import profile from '../../assets/svg/profile.svg'

export const Navbar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around w-full h-14 lg:w-24 sm:w-full md:w-24 md:h-full sm:h-15 lg:h-full bg-slate-50 sm:fixed lg:fixed md:fixed md:top-0 md:left-0 lg:top-0 lg:left-0 sm:bottom-0 sm:left-0 sm:right-0 text-white sm:flex md:flex lg:flex md:flex-col lg:flex-col md:items-center lg:items-center sm:justify-around md:justify-center lg:justify-center md:space-y-20 lg:space-y-20 sm:p-4">
            <div>
                <img
                    src={home}
                    alt="home"
                    className="w-8 sm:w-11 lg:w-10 md:w-11"
                />
            </div>
            <div>
                <img
                    src={scan}
                    alt="scan"
                    className="w-8 sm:w-11 lg:w-10 md:w-11"
                />
            </div>
            <div>
                <img
                    src={profile}
                    alt="profile"
                    className="w-8 sm:w-11 lg:w-10 md:w-11"
                />
            </div>
        </div>
    )
}

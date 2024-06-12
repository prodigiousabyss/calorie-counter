import { Suggestions } from '../../components/Suggestions/Suggestions'
import { Topbar } from '../../components/Topbar/Topbar'

export const Home = () => {
    return (
        <div className="flex items-center flex-col space-y-8">
            <Topbar />
            <div className="flex items-center flex-col py-0 lg:py-20">
                <Suggestions />
            </div>
        </div>
    )
}

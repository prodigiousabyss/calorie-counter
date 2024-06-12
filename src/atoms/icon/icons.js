import { home } from './svg/home'
import { profile } from './svg/profile'
import { scan } from './svg/scan'
import { search } from './svg/search'

export const icons = {
    home: home,
    profile: profile,
    search: search,
    scan: scan,
}

export const Icon = ({ name, ...props }) => {
    const Comp = icons[name]

    return (
        <div>
            <Comp {...props} />
        </div>
    )
}

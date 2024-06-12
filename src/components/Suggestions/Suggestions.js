import img1 from '../../assets/images/peaches.jpeg'
import img2 from '../../assets/images/rasp.jpeg'
import img3 from '../../assets/images/strawberry.jpeg'

export const Suggestions = () => {
    return (
        <div className="space-y-2 lg:flex lg:items-center lg:space-x-4 lg:flex-wrap mb-24">
            <img
                src={img1}
                alt="peaches"
                className="w-80 h-auto rounded-xl border"
            />
            <img
                src={img2}
                alt="peaches"
                className="w-80 h-auto rounded-xl border"
            />
            <img
                src={img3}
                alt="peaches"
                className="w-80 h-auto rounded-xl border"
            />
        </div>
    )
}

import airbnb from "../data/airbnb.svg"
import yelp from "../data/yelp.svg"
import booking from "../data/booking.svg"
const Companies = () => {
  return (
    <div className="grid justify-center items-center pt-3 pb-4 mb-4 mt-2 ">
        <h3  className="text-2xl text-slate-700">We get our data from the best </h3>
        <div className="container flex flex-row gap-4 justify-around mt-4">
            <img className="h-16" src={airbnb} />
            <img className="h-16" src={yelp} />
            <img className="h-16" src={booking} />
        </div>
    </div>
  )
}

export default Companies
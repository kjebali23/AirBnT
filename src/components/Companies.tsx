import airbnb from "../data/airbnb.svg"
import yelp from "../data/yelp.svg"
import booking from "../data/booking.svg"
const Companies = () => {
  return (
    <div className="grid justify-center bg-slate-100 items-center pt-2 pb-10 bg-slate-50 ">
        <h3  className="text-2xl text-slate-700 text-center">We get our data from the best </h3>
        <div className="container flex flex-row gap-4 justify-around mt-6">
            <img className="h-16" src={airbnb} />
            <img className="h-16" src={yelp} />
            <img className="h-16" src={booking} />
        </div>
    </div>
  )
}

export default Companies
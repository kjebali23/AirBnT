import {cityImages} from "../data/imgs"

type cityProps={
    cityName:string,
    description:string
    id:number
}

const Card = ({cityName , description , id}:cityProps) => {
  return (
        <div className="card card-compact w-96 bg-white shadow-xl ">
            <figure>
                <img  src={cityImages[id]}/>
            </figure>
            <div className="card-body flex items-center">
                <h2 className="card-title text-black">{cityName}</h2>
                <p className="text-black">{description}</p>
                <div className="card-action justify-end">
                    <button className="btn btn-primary">See more</button>
                </div>
            </div>
        </div>
  )
}

export default Card
import { categoriesImages } from '../data/imgs'

type cardProps={
  name: string,
  id: number
}

const CarouselCard = ({name , id}:cardProps) => {
  return (




    <div className="carousel-item ">
        <div className="card card-compact w-60 bg-slate-50 shadow-md image-full">
          <figure><img src={categoriesImages[id-1]} alt="Shoes" /></figure>
          <div className="card-body grid justify-center">
          <h2 className="card-title text-center ">{name}</h2>
          </div>
</div>
        </div>
//     <div className="card w-96 bg-base-100 shadow-xl image-full">
//     <figure>
//       <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
//     </figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
  )
}

export default CarouselCard
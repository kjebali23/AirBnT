import Pics from './Pics'

const Suggestion = () => {
  return (
    <div className="flex flex-col bg-slate-50 pt-4 mb-12 justify-center">
        <h3 className="text-3xl text-slate-700 mt-8 mb-4 text-center">Our Summer pick :</h3>
        <div className="w-4/6 m-auto flex flex-col justify-center">
            <h2 className="text-3xl  text-slate-700 mt-6 mb-4 ">Tunisia</h2>
            <p className="text-slate-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button className="btn btn-primary  m-auto mt-4">Learn More</button>
        </div>
        
            <div className="visual-info mt-4  gap-3 w-3/5 m-auto flex flex-row flex-wrap justify-center items-center">
                
                <Pics/>

            </div>
    </div>
  )
}

export default Suggestion
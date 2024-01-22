import { RiEmotionSadLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function CarsI ({ result }) {
  if (result.length === 0) {
    return (
      <h1 className='text-center justify-center items-center gap-1 my-24 flex text-2xl font-bold'>
        No se encontraron resultados
        <RiEmotionSadLine />
      </h1>
    )
  }

  return (
    <div className='h-full mb-14 mt-[1.5rem] grid-col-res md:mx-32 gap-6 p-5'>
      {result.map((car) => (
        <div key={car._id} className='m-auto w-full mt-0 flex flex-col overflow-hidden border-2 border-blue-400 rounded-md'>
          <div className='w-full h-[260px] bg-white p-4 overflow-hidden border-2 rounded border-blue-100'>
            <img className='object-cover bg-center w-full h-full outline-2 outline outline-blue-400' src={car.preview || car.images[0]} alt={car.model} />
          </div>
          <hr />
          <div className='h-[140px] flex flex-col bg-blue-100'>
            <div className='flex'>
              <p className='w-[50%] bg-gray-500 p-1 text-center text-blue-100'>{car.brand}</p>
              <p className='w-[50%] bg-blue-400 p-1 text-center'>$ {Math.round(car.price).toLocaleString()}</p>
            </div>
            <div className='flex w-full h-auto sm:h-full'>
              <div className='flex flex-col items-center justify-center w-[50%] h-full'>
                <h1 className='text-center'>{car.line} {car.model}</h1>
                <h3>KLM: {car.kilometers}</h3>
              </div>
              <div className='flex w-[50%] h-full items-center justify-center p-2'>
                <Link to={`/cars/${car._id}`} className='border-2 border-blue-400 rounded p-1 bg-blue-400 text-white hover:bg-blue-500 transition-colors hover:text-white hover:border-blue-500 text-center'>MAS INFORMACION</Link>
              </div>
            </div>
          </div>
        </div>
      )
      )}
    </div>
  )
}

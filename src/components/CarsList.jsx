import { RiEmotionSadLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Pagination } from 'keep-react'
import { GrConfigure } from 'react-icons/gr'
import { useState } from 'react'
import { FaCarAlt } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'

export default function CarsI ({ result }) {
  const [currentPage, setCurrentPage] = useState(1)

  if (result.length === 0) {
    return (
      <h1 className='text-center justify-center items-center gap-1 my-24 flex text-2xl font-bold'>
        No se encontraron resultados
        <RiEmotionSadLine />
      </h1>
    )
  }

  return (
    <>
      <Pagination
        className='flex my-5 justify-center items-center'
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={20}
        iconWithOutText
        paginateWithBorder
        prevNextShape='circle'
      />

      <div className='h-full mb-14 mt-[1.5rem] grid-col-res justify-center justify-items-center xl:mx-32 md:mx-5 gap-4 p-5'>
        {result.map((car) => (
          <div
            key={car.id}
            className='bg-blue-50 w-[87%] h-[390px] flex flex-col justify-start items-center relative rounded-3xl overflow-hidden mb-3 hover:bg-blue-200 duration-1000 shadow-md shadow-blue-200'
          >
            <div className='w-full h-[45%] z-[9] rounded-md overflow-hidden '>
              <img className='w-full h-full rounded-md object-cover' src={car.preview || car.images[0]} alt='' />
            </div>

            <div className='absolute w-full h-full bg-transparent flex justify-center items-end z-[10]'>
              <div className='w-[80%] h-[65%] flex justify-center items-center z-10'>
                <div className='w-full h-[80%] bg-white flex flex-col justify-around items-center rounded-xl px-2 shadow-[0_5px_17px_#A8BDF5] gap-1 py-1'>
                  <div className='flex flex-col content-center items-center'>
                    <h1 className='text-black font-sans text-lg text-wrap text-center'>{car.brand} {car.line}</h1>
                  </div>
                  <div className='flex gap-x-5'>
                    <div className='flex flex-col content-center items-center'>
                      <p className='text-[10px] text-blue-500 font-sans font-black'><strong>AÑO</strong></p>
                      <div className='flex justify-center text-wrap content-center items-center'>
                        <GrConfigure className='mr-2 text-blue-950' size={20} />
                        <p className='text-black font-sans text-sm'>{car.model}</p>
                      </div>
                    </div>
                    <div className='flex flex-col content-center items-center'>
                      <p className='text-[10px] text-blue-500 font-sans font-black'><strong>KML</strong></p>
                      <div className='flex justify-center text-wrap content-center items-center'>
                        <FaCarAlt className='mr-2 text-blue-950' size={20} />
                        <p className='text-black font-sans text-sm'>{car.kilometers}</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col content-center items-center'>
                    <p className='text-[10px] text-blue-500 font-sans font-black'><strong>PRECIO</strong></p>
                    <div className='flex justify-center content-center items-center'>
                      <MdOutlineAttachMoney className=' text-blue-950' size={20} />
                      <h1 className='text-black font-sans text-lg'>{Math.round(car.price).toLocaleString()}</h1>
                    </div>
                  </div>
                  <Link className='px-4 py-1 border-2 border-blue-950 rounded-md bg-blue-950 text-white mb-1' to={`/cars/${car._id}`}>
                    <p className='font-sans'>Ver mas</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
        )}
      </div>

      <Pagination
        className='flex my-5 justify-center items-center'
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={20}
        iconWithOutText
        paginateWithBorder
        prevNextShape='circle'
      />
    </>

  )
}

import { FaCarAlt } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { GrConfigure } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const TargetCar = ({ carsJson, style }) => {
  return (
    carsJson.map((car) => (
      <motion.div
        key={car._id}
        className={`bg-blue-50 h-[390px] ${style} hidden flex-col justify-start items-center relative rounded-3xl overflow-hidden mb-3 hover:bg-blue-200 duration-1000 shadow-md shadow-blue-200 md:flex`}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='w-full h-[45%] z-[9] rounded-md overflow-hidden '>
          <motion.img
            className='w-full h-full rounded-md object-cover'
            src={car.preview || car.images[0]}
            alt=''
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className='absolute w-full h-full bg-transparent flex justify-center items-end z-[10]'>
          <div className='w-[80%] h-[65%] flex justify-center items-center z-10'>
            <div className='w-full h-[80%] bg-white flex flex-col justify-around items-center rounded-xl px-2 shadow-[0_5px_17px_#A8BDF5] gap-1 py-1'>
              <div className='flex flex-col content-center items-center'>
                <h1 className='text-black  text-lg text-wrap text-center'>{car.brand} {car.line}</h1>
              </div>
              <div className='flex gap-x-5'>
                <div className='flex flex-col content-center items-center'>
                  <p className='text-[10px] text-blue-500  font-black'><strong>AÑO</strong></p>
                  <div className='flex justify-center text-wrap content-center items-center'>
                    <GrConfigure className='mr-2 text-blue-950' size={20} />
                    <p className='text-black  text-sm'>{car.model}</p>
                  </div>
                </div>
                <div className='flex flex-col content-center items-center'>
                  <p className='text-[10px] text-blue-500  font-black'><strong>KML</strong></p>
                  <div className='flex justify-center text-wrap content-center items-center'>
                    <FaCarAlt className='mr-2 text-blue-950' size={20} />
                    <p className='text-black  text-sm'>{car.kilometers}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col content-center items-center'>
                <p className='text-[10px] text-blue-500  font-black'><strong>PRECIO</strong></p>
                <div className='flex justify-center content-center items-center'>
                  <MdOutlineAttachMoney className=' text-blue-950' size={20} />
                  <h1 className='text-black  text-lg'>{Math.round(car.price).toLocaleString()}</h1>
                </div>
              </div>
              <Link className='px-4 py-1 border-2 border-blue-950 rounded-md bg-blue-950 text-white mb-1' to={`/cars/${car._id}`}>
                <p className=''>Ver mas</p>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    ))
  )
}

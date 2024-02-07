import Spinner from '../components/Spinner'
import { AiOutlineCar, AiOutlineTags, AiOutlineFolderOpen, AiOutlineUserSwitch, AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import { IoColorFilterOutline } from 'react-icons/io5'
import { SlSpeedometer } from 'react-icons/sl'
import { TbSettingsCheck } from 'react-icons/tb'
import { LuFuel } from 'react-icons/lu'
import { GrConfigure } from 'react-icons/gr'
import { FaMapLocationDot } from 'react-icons/fa6'
import { BsCardText, BsWhatsapp } from 'react-icons/bs'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FullscreenCarrousel } from '../components/FullscreenCarrousel'
import useDisclosure from '../hooks/useDisclosure'
import { TargetCar } from '../components/TargetCar'
import useCarsStore from '../hooks/useCarsStore'
import CarNotFound from '../components/CarNotFound'

export default function CarPage () {
  const params = useParams()
  const [translate, setTranslate] = useState(0)
  const { handleClose, handleOpen, open } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState('')
  const { cars, loading } = useCarsStore()

  const getRandomCars = useMemo(() => {
    const randomCars = []
    const carsCopy = [...cars]

    while (randomCars.length < 5) {
      if (carsCopy.length === 0) break
      const random = Math.floor(Math.random() * carsCopy.length)
      randomCars.push(carsCopy[random])
      carsCopy.splice(random, 1)
    }

    return randomCars
  }, [cars])

  if (loading) return <Spinner color='text-blue-600' className='h-[80dvh]' />

  const car = cars.find((car) => String(car._id) === params.id)

  // temporal fix
  if (!car) return <CarNotFound />

  const imagenes = car.images

  if (translate >= imagenes.length * 100) setTranslate(0)
  if (translate <= -100) setTranslate((imagenes.length - 1) * 100)

  const handleClick = (e) => {
    setSelectedImage(e.target.src)
    handleOpen()
  }

  return (
    <>
      <section className='w-full px-28 h-auto grid grid-cols-1 lg:grid-cols-2 pt-10 max-md:p-0 max-md:pt-20 md:pt-24 min-[2560px]:p-36'>
        <div className='w-full h-auto min-[420px]:h-[70vh] sm:h-[90vh] lg:h-[78vh] flex flex-col items-center justify-center pt-5'>
          <div className='w-[90%] md:w-[80%] h-full sm:w-[78%] sm:h-[88%] lg:h-[90%] min-[1920px]:w-[80%] min-[1920px]:h-[80%] min-[2560px]:w-[80%] min-[2560px]:h-[90%] mb-11 lg:mb-9'>
            <div className='w-full max-w-fit h-[80%] border rounded-md overflow-hidden mb-2 flex items-center relative'>
              <button onClick={() => setTranslate(translate - 100)} className='text-white absolute z-20 bg-slate-200 rounded-full m-2 p-1'><AiFillCaretLeft className='text-blue-400' size={20} /></button>
              <button onClick={() => setTranslate(translate + 100)} className='text-white absolute z-20 bg-slate-200 rounded-full  right-0 m-2 p-1'><AiFillCaretRight className='text-blue-400' size={20} /></button>
              <div className='w-full object-fill max-w-full h-full flex duration-700' style={{ transform: `translateX(-${translate}%)` }}>
                {imagenes.map((i, index) => (
                  <div key={index} className='w-full h-full select-none min-w-full'>
                    <img onClick={handleClick} className='w-full h-full object-fill lg:object-cover object-center select-none' src={i} alt='' />
                  </div>
                ))}
              </div>
            </div>
            <div className='flex h-[20%] select-none bg-neutral-200 border rounded-md overflow-x-auto p-1'>
              {imagenes.map((i, index) => (
                <img
                  onClick={() => setTranslate(index * 100)} key={index + 100} className='w-[15%] cursor-pointer select-none h-full object-cover object-center rounded-md mr-1' src={i} alt=''
                />
              ))}
            </div>
          </div>
        </div>

        <div className='w-full h-auto min-[420px]:h-[70vh] sm:h-[90vh] lg:h-[78vh] flex flex-col items-center justify-center pt-5'>
          <div className='w-[90%] md:w-[80%] h-full sm:w-[78%] sm:h-[88%] lg:h-[90%] min-[1920px]:w-[80%] min-[1920px]:h-[80%] min-[2560px]:w-[80%] min-[2560px]:h-[90%] mb-11 lg:mb-9'>
            <div className='w-full h-[20%] flex flex-col justify-center items-center sm:items-start border-b-2 border-blue-800'>
              <h1 className=' font-semibold text-2xl min-[1920px]:text-4xl min-[2560px]:text-5xl'>{car.brand} {car.line}</h1>
              <h1 className=' font-semibold text-2xl min-[1920px]:text-4xl min-[2560px]:text-5xl'><span className='text-green-400'>$</span> {Math.round(car.price).toLocaleString()}</h1>
            </div>
            <div className='w-full h-[80%] flex flex-row items-center p-2'>
              <div className='w-[50%] h-full mr-2'>{/* Colmuna 1 */}
                <div className='flex h-[20%] items-center border-b-2 border-blue-800 capitalize'>
                  <AiOutlineTags className='mr-2' size={24} />
                  <p className='max-sm:text-sm min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 max-sm:text-xs text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Marca</span>  <br /> {car.brand}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-800 capitalize'>
                  <IoColorFilterOutline className='mr-2' size={24} />
                  <p className='max-sm:text-sm min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 max-sm:text-xs text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Color</span>  <br /> {car.color}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-800 capitalize'>
                  <AiOutlineFolderOpen className='mr-2' size={24} />
                  <p className='max-sm:text-sm min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 max-sm:text-xs text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Tipo</span>  <br /> {car.type}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-800 capitalize'>
                  <TbSettingsCheck className='mr-2' size={24} />
                  <p className='max-sm:text-sm min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 max-sm:text-xs text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Transmision</span>  <br /> {car.transmission}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-800 capitalize'>
                  <LuFuel className='mr-2' size={24} />
                  <p className='max-sm:text-sm min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 max-sm:text-xs text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Combustible</span>  <br /> {car.fuel}</p>
                </div>
              </div>
              <div className='w-[50%] h-full ml-2'>{/* Colmuna 2 */}
                <div className='flex h-[20%] items-center border-b-2 border-blue-800 capitalize'>
                  <AiOutlineCar className='mr-2' size={24} />
                  <p className='max-sm:text-sm min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 max-sm:text-xs text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Linea</span>  <br /> {car.line}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-800 capitalize'>
                  <SlSpeedometer className='mr-2' size={24} />
                  <p className='max-sm:text-sm min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 max-sm:text-xs text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Km</span>  <br /> {car.kilometers}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-800 capitalize'>
                  <GrConfigure className='mr-2' size={24} />
                  <p className='max-sm:text-sm min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 max-sm:text-xs text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Año</span>  <br /> {car.model}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-800 capitalize'>
                  <AiOutlineUserSwitch className='mr-2' size={24} />
                  <p className='max-sm:text-sm min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 max-sm:text-xs text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Propietarios</span>  <br /> {car.owners}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-800 capitalize'>
                  <BsCardText className='mr-2' size={24} />
                  <p className='max-sm:text-sm min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 max-sm:text-xs text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Placa</span>  <br /> {car.plate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col sm:flex-row justify-center items-center mb-5'>
        <Link className='bg-green-400 hover:bg-green-500 transition-colors p-4 text-white mr-2 max-sm:mr-0 rounded-md flex items-center justify-center max-sm:my-1' to='https://wa.me/573123719021' target='_blank' rel='noreferrer'><BsWhatsapp className='mx-1' size={25} /> <p>Contactar</p></Link>
        <Link className='bg-blue-400 hover:bg-blue-500 transition-colors p-4 text-white rounded-md flex items-center justify-center max-sm:my-1' to='/about#maps'><FaMapLocationDot className='mx-1' size={25} /> <p>Ubicacion</p></Link>
      </section>

      <FullscreenCarrousel open={open} handleClose={handleClose} selectedImage={selectedImage} data={imagenes} />

      <div className='w-full flex flex-col justify-center items-center mt-20'>
        <h1 className='text-4xl font-bold text-black text-center' id='latest-vehicles'>
          Inventario que te puede interesar
        </h1>
        <article className='flex flex-wrap w-full 2xl:w-[80%] justify-center items-center gap-7 my-7'>
          <TargetCar carsJson={getRandomCars} style='w-[250px] sm:w-[350px]' />
        </article>
      </div>

    </>
  )
}

import { Carousel } from 'keep-react'
import cars from '../mocks/cars.json'
import bgvideo from '../assets/carrouselbgvideo.webm'
import Button from './Button'
import { Link } from 'react-router-dom'
import { IoOpenSharp } from 'react-icons/io5'
import { ultimosCars } from '../helpers/data'

export default function CarsCarrousel () {
  return (
    <section className='imgFixed overflow-hidden w-full px-10 py-5 flex justify-items-center content-center justify-center items-center relative h-[80vh] flex-col sm:flex-row'>
      <Carousel className='w-[80%] h-[45%] sm:w-[40%] sm:h-[50%] md:w-[50%] md:h-[55%] lg:w-[45%] xl:w-[40%] xl:h-[65%] z-30 rounded-3xl' slideInterval={4000} showControls indicators>
        {ultimosCars.map((car, index) => (
          <article key={index} className='relative text-white'>
            <img src={car.preview || car.images[0]} alt='car' className='object-cover w-full h-full' />
            <span className='absolute md:text-xl flex flex-col md:justify-end p-4 bg-black/30 w-full h-full'>
              <h4>{car.brand}</h4>
              <p>{car.line}</p>
              <p>{car.model}</p>
            </span>
            <Link to={`/cars/${car._id}`}>
              <Button className='absolute bottom-0 right-16 z-50 m-4 hidden md:block'>Ver más</Button>
              <Button className='absolute top-0 right-5 z-50 m-4 bg-black/60 block md:hidden'><IoOpenSharp /></Button>
            </Link>
          </article>
        ))}
      </Carousel>
      <div className='w-full h-full sm:w-[60%] sm:h-[50%] md:w-[50%] md:h-[65%] lg:w-[55%] xl:h-[70%] flex justify-center items-center justify-items-center content-center'>
        <div className='w-[80%] h-[90%] md:w-[90%] lg:w-[75%] lg:h-[80%] xl:w-[60%] bg-white rounded-3xl flex flex-col justify-evenly items-center p-1 '>
          <h2 className='text-xl md:text-2xl lg:text-3xl text-center text-black font-mono'>Nuestros últimos autos</h2>
          <p className='text-xs md:text-sm lg:text-base text-center text-black font-mono max-w-[300px]'>Explora nuestro catalogo de vehiculos tanto nuevos como usados.</p>
          <Link to='/cars'>
              <Button className='mt-6 bg-[#212529] hover:bg-[#666666] text-[#f8f9fa]'>Explorar</Button>
            </Link>
        </div>
        
      </div>
        
    </section>
  )
}

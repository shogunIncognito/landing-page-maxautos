import { Carousel } from 'keep-react'
import cars from '../mocks/cars.json'
// import bgvideo from '../assets/carrouselbgvideo.webm'
import Button from './Button'
import { Link } from 'react-router-dom'
import { IoOpenSharp } from 'react-icons/io5'

export default function CarsCarrousel () {
  return (
    <section className='imgFixed overflow-hidden w-full px-10 py-5 flex justify-items-center content-center justify-center items-center relative h-[80vh] flex-col sm:flex-row'>
      <section aria-labelledby='latest-vehicles' className='bg-[#f3f4f6] text-[#1f2937] rounded'>
        <div className='container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between'>
          <div className='flex flex-col text-center space-y-4 lg:w-1/2'>
            <h2 className='text-4xl font-bold' id='latest-vehicles'>
              Nuestros últimos autos
            </h2>
            <p className='text-lg'>Explora nuestro catálogo de vehículos tanto nuevos como usados.</p>
            <Button className='bg-[#1f2937] text-[#f3f4f6] self-center'>Explorar</Button>
          </div>
          <div className='relative mt-8 lg:mt-0 lg:w-1/2'>
            <div className='absolute inset-0 flex items-center justify-center' />
            <div className='flex justify-center'>
              <Carousel className='z-50' slideInterval={4000} showControls indicators>
                {cars.slice(0, 5).map((car, index) => (
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
            </div>
            <div className='absolute inset-0 flex items-center justify-center' />
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-1' />
          </div>
        </div>
      </section>
    </section>
  )
}

import { Carousel } from 'keep-react'
import cars from '../mocks/cars.json'
import bgvideo from '../assets/carrouselbgvideo.webm'
import Button from './Button'
import { Link } from 'react-router-dom'
import { IoOpenSharp } from 'react-icons/io5'

export default function CarsCarrousel () {
  return (
    <section className='relative overflow-hidden w-full px-10 py-5 flex justify-center items-center flex-col'>
      <h2 className='md:text-4xl text-2xl z-30 text-center my-7 text-white'>Nuestros últimos autos</h2>
      <Carousel className='md:w-4/5 max-w-full max-h-[36rem] z-30 2xl:h-[36rem] lg:h-[26rem]' slideInterval={4000} showControls indicators>
        {cars.map((car, index) => (
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
      <video src={bgvideo} muted loop autoPlay playsInline className='absolute top-0 w-full object-cover h-full' />
    </section>
  )
}

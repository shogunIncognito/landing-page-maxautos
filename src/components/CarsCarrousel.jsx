import { Carousel } from 'keep-react'
import cars from '../mocks/cars.json'
import bgvideo from '../assets/carrouselbgvideo.webm'

export default function CarsCarrousel () {
  return (
    <section className='relative overflow-hidden w-full px-10 py-5 flex justify-center items-center flex-col'>
      <h2 className='md:text-4xl text-2xl z-30 text-center my-7 text-white'>Nuestros últimos autos</h2>
      <Carousel className='w-full z-30 2xl:h-[36rem]' slideInterval={4000} showControls indicators>
        {cars.map((car, index) => (
          <article key={index} className='relative text-white'>
            <img src={car.preview} alt='car' className='object-cover w-full' width={600} height={400} />
            <span className='absolute text-xl flex flex-col justify-end p-4 bg-black/30 w-full h-full'>
              <h4>{car.brand}</h4>
              <p>{car.line}</p>
              <p>{car.model}</p>
            </span>
          </article>
        ))}
      </Carousel>
      <video src={bgvideo} muted loop autoPlay playsInline className='absolute top-0 w-full object-cover h-full' />
    </section>
  )
}

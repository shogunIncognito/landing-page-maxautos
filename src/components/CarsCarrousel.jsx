import { Carousel } from 'keep-react'
import cars from '../mocks/cars.json'
// import bgvideo from '../assets/carrouselbgvideo.webm'
import Button from './Button'
import { Link } from 'react-router-dom'
import { IoOpenSharp } from 'react-icons/io5'

export default function CarsCarrousel () {
  return (
    <section className='w-full flex justify-center'>
      <article className='imgFixed overflow-hidden w-[93%] flex justify-items-center content-center justify-center items-center relative h-[80vh] flex-col sm:flex-row bg-blue-950 rounded-[60px]'>
        <div className='flex flex-col text-center space-y-4 w-[50%] items-center'>
          <h2 className='text-4xl font-bold text-white' id='latest-vehicles'>
            Nuestros últimos autos
          </h2>
          <p className='text-white max-w-[80%] text-base'>
            Explora nuestra última colección de autos, nuevos y usados. Encuentra el equilibrio perfecto
            entre innovación y confiabilidad. En nuestra concesionaria, descubre el automóvil ideal para
            ti. ¡Vive la emoción de conducir con nosotros!
          </p>
          {/* <p className='text-base text-white'>Explora nuestro catálogo de vehículos tanto nuevos como usados.</p> */}
          <Button className='bg-white text-blue-950 self-center hover:bg-slate-200'>Explorar</Button>
        </div>
        <div className='relative w-[50%] h-full bg-blue-950 flex justify-center items-center rounded-full p-7'>
          <div className='absolute w-[78%] h-[78%] bg-slate-100 rounded-[40px]' />
          <div className='flex justify-center h-[75%] w-[75%] items-center'>
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
        </div>
      </article>
    </section>

  )
}

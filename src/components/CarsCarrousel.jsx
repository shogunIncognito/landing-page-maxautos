// import cars from '../mocks/cars.json'
// import bgvideo from '../assets/carrouselbgvideo.webm'
import Button from './Button'
import { TargetCar } from './TargetCar'
import cars from '../mocks/cars.json'
import { Link } from 'react-router-dom'

export default function CarsCarrousel () {
  const carsFilter = cars.slice(0, 5)

  return (
    <section className='w-full flex flex-col justify-center items-center'>
      <article className='flex justify-center'>
        <h2 className='text-4xl font-bold text-black text-center' id='latest-vehicles'>
          Nuestros últimos autos
        </h2>
      </article>
      <article className='flex flex-wrap w-full 2xl:w-[80%] justify-center items-center gap-7 my-7'>
        <TargetCar carsJson={carsFilter} style='w-[250px] sm:w-[350px] ' />
      </article>
      {/* <p className='text-base text-white'>Explora nuestro catálogo de vehículos tanto nuevos como usados.</p> */}
      <Link to='/cars'>
        <Button className='bg-blue-950 text-white self-center hover:bg-blue-900'>Explorar</Button>
      </Link>

    </section>
  )
}

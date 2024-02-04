// import cars from '../mocks/cars.json'
// import bgvideo from '../assets/carrouselbgvideo.webm'
import Button from './Button'
import { TargetCar } from './TargetCar'
import cars from '../mocks/cars.json'

export default function CarsCarrousel () {
  const carsFilter = cars.slice(0, 6)

  return (
    <section className='w-full flex flex-col justify-center'>
      <article className='flex justify-center'>
        <h2 className='text-4xl font-bold text-black' id='latest-vehicles'>
          Nuestros últimos autos
        </h2>
      </article>
      <TargetCar carsJson={carsFilter} />
      {/* <p className='text-base text-white'>Explora nuestro catálogo de vehículos tanto nuevos como usados.</p> */}
      <Button className='bg-blue-950 text-white self-center hover:bg-blue-900'>Explorar</Button>
    </section>

  )
}

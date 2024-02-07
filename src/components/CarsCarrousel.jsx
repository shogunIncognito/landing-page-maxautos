import Button from './Button'
import { TargetCar } from './TargetCar'
import useCarsStore from '../hooks/useCarsStore'
import { CarsSkeleton } from './CarsSkeleton'
import { Link } from 'react-router-dom'

export default function CarsCarrousel () {
  const { cars, loading } = useCarsStore()

  const carsFiltered = !loading && cars.slice(0, 5)

  return (
    <section className='w-full flex flex-col justify-center items-center'>
      <article className='flex justify-center'>
        <h2 className='text-4xl font-bold text-black text-center' id='latest-vehicles'>
          Nuestros últimos autos
        </h2>
      </article>
      <article className='flex flex-wrap w-full 2xl:w-[80%] justify-center items-center gap-7 my-7'>
        {loading ? <CarsSkeleton className='flex w-full' size={3} /> : <TargetCar carsJson={carsFiltered} style='w-[250px] sm:w-[350px]' />}
      </article>
      <Link to='/cars'>
        <Button className='bg-blue-950 text-white self-center hover:bg-blue-900'>Explorar</Button>
      </Link>
    </section>
  )
}

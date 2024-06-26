import Button from './Button'
import { TargetCar } from './TargetCar'
import { CarsSkeleton } from './CarsSkeleton'
import { Link } from 'react-router-dom'
import { Carousel } from 'keep-react'
import useFetchCars from '../hooks/useFetchCars'

export default function CarsCarrousel () {
  const { cars, loading } = useFetchCars('?page=1&limit=4&show=true')

  return (
    <section className='w-full p-2 flex flex-col justify-center items-center'>
      <article className='flex justify-center'>
        <h2 className='md:text-4xl text-3xl font-bold text-black text-center' id='latest-vehicles'>
          Nuestros últimos autos
        </h2>
      </article>
      <article className='flex w-full md:flex-wrap lg:flex-nowrap md:px-10 2xl:w-[80%] justify-center items-center gap-4 md:gap-7 my-7'>
        {/* desktop view gallery */}
        {loading ? <CarsSkeleton className='w-full hidden md:flex' size={3} /> : <TargetCar cars={cars.result} style='w-[250px] sm:w-[350px] md:flex hidden' />}

        {/* mobile view carrousel */}
        {loading
          ? <CarsSkeleton className='flex w-full md:hidden' size={1} />
          : (
            <Carousel indicatorsType='ring' className='md:hidden px-5' indicators showControls>
              {cars.result.map(car => (
                <article className='relative overflow-hidden' key={car._id}>
                  <Link to={`/cars/${car._id}`}>
                    <img
                      src={car.preview || car.images[0]}
                      alt='gallery-photo'
                      className='select-none pointer-events-none'
                    />
                    <div className='absolute w-full flex-col-reverse text-white top-0 rounded z-30 bg-black/40 inset-0 flex items-start justify-start p-5'>
                      <h2>{car.brand}</h2>
                      <h3>{car.line}</h3>
                      <h3>{car.model}</h3>
                    </div>
                  </Link>
                </article>
              ))}
            </Carousel>
            )}

      </article>
      <Link to='/cars'>
        <Button className='bg-blue-950 text-white self-center hover:bg-blue-900'>Explorar</Button>
      </Link>
    </section>
  )
}

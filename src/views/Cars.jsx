import Button from '../components/Button'
import CarsI from '../components/CarsList'
import Input from '../components/Input'
import { LuSearch } from 'react-icons/lu'
import { useEffect, useState } from 'react'
import cars from '../mocks/cars.json'
import { useLocation } from 'react-router-dom'
import { CarsSkeleton } from '../components/CarsSkeleton'

export default function page () {
  const filterQuery = useLocation().search.split('=')[1]
  const [bus, setBus] = useState('')
  const [buscar, setBuscar] = useState('')
  const loading = false

  const InputChange = (e) => {
    setBus(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setBuscar(bus)
  }

  const filteredCars = cars.filter((car) => {
    const datoString = `${car.brand} ${car.line} ${car.model} ${car.color}`
    return datoString.toLowerCase().includes(buscar.toLowerCase())
  })

  useEffect(() => {
    if (filterQuery) {
      setBuscar(filterQuery)
      setBus(filterQuery)
    }
  }, [])

  return (
    <>
      <section className='image-cars flex flex-col justify-center text-center w-full rounded-b-lg lg:h-[60vh] h-[55vh] bg-center bg-cover bg-fixed overflow-hidden'>
        <h1 className='text-white text-4xl font-bold'>NUESTROS  AUTOS</h1>
      </section>
      <section className='w-full bg-transparent max-[1920px]:top-[64px] min-[2560px]:top-[91px] flex justify-center sticky z-20'>
        <div className='flex z-20 w-[97%] lg:w-3/4 justify-center bg-blue-400 p-4 shadow-xl rounded-b-lg'>
          <form className='flex rounded-md overflow-hidden bg-transparent max-md:w-full md:w-[50%]' onSubmit={onSubmit}>
            <Input className='max-md:text-xs h-full bg-white text-black dark:text-black w-[90%] border-solid rounded-none z-20' placeholder='Buscar por marca, linea, año y color' value={bus} onChange={InputChange} type='text' />
            <Button className='w-[10%] border-solid h-full rounded-none grid place-content-center bg-blue-500 -z-20'><LuSearch size={15} /> </Button>
          </form>
        </div>
      </section>

      <section id='catalogo'>
        {loading
          ? <CarsSkeleton />
          : <CarsI result={filteredCars} />}
      </section>
    </>

  )
}

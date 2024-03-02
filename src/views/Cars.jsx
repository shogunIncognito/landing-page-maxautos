import CarsList from '../components/CarsList'
import Input from '../components/Input'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CarsSkeleton } from '../components/CarsSkeleton'
import useCarsStore from '../hooks/useCarsStore'
import useDebounce from '../hooks/useDebounce'
import { CiSearch } from 'react-icons/ci'

export default function page () {
  const filterQuery = useLocation().search.split('=')[1]
  const { loading, cars } = useCarsStore()
  const [bus, setBus] = useState('')
  const debouncedSearch = useDebounce(bus, 500)

  const inputChange = (e) => setBus(e.target.value)

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const datoString = `${car.brand} ${car.line} ${car.model} ${car.color}`
      return datoString.toLowerCase().includes(bus.toLowerCase())
    })
  }, [debouncedSearch])

  useEffect(() => {
    if (filterQuery) setBus(filterQuery)
  }, [])

  return (
    <>
      <section className='image-cars flex flex-col justify-center text-center w-full rounded-b-lg lg:h-[60vh] h-[55vh] bg-center bg-cover bg-fixed overflow-hidden'>
        <h1 className='text-white text-4xl font-bold'>NUESTROS  AUTOS</h1>
      </section>
      <section className='w-full bg-transparent max-[1920px]:top-[64px] min-[2560px]:top-[91px] flex justify-center z-20'>
        <div className='flex z-20 w-[85%] lg:w-[85%] justify-center bg-blue-100 p-5 shadow-xl'>
          <Input className='max-md:text-xs h-full bg-white rounded-s-md text-black p-2 w-[60%] border-solid z-20' placeholder='Buscar por marca, linea, año y color' value={bus} onChange={inputChange} type='text' />
        </div>
      </section>

      <section id='catalogo'>
        {loading
          ? <CarsSkeleton className='grid-col-res my-16 place-content-center' />
          : <CarsList result={filteredCars} />}
      </section>
    </>

  )
}

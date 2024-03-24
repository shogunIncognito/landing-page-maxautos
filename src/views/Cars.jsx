import CarsList from '../components/CarsList'
import Input from '../components/Input'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CarsSkeleton } from '../components/CarsSkeleton'
import useCarsStore from '../hooks/useCarsStore'
import Button from '../components/Button'
import { IoSearch } from 'react-icons/io5'

export default function page () {
  const filterQuery = useLocation().search.split('=')[1]
  const { loading, cars } = useCarsStore()
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target[0].value)
  }

  const filteredCars = useMemo(() => {
    if (!search) return cars
    return cars.filter((car) => {
      const datoString = `${car.brand} ${car.line} ${car.model} ${car.color}`
      return datoString.toLowerCase().includes(search.toLowerCase())
    })
  }, [search, cars])

  useEffect(() => {
    if (filterQuery) setSearch(filterQuery)
  }, [])

  return (
    <>
      <section className='image-cars flex flex-col justify-center px-1 text-center w-full rounded-b-lg lg:h-[60vh] h-[55vh] bg-center bg-cover bg-fixed overflow-hidden'>
        <h1 className='text-white md:text-4xl text-3xl font-bold'>NUESTROS  AUTOS</h1>
      </section>
      <section className='w-full bg-transparent max-[1920px]:top-[64px] min-[2560px]:top-[91px] flex justify-center z-20'>
        <form onSubmit={handleSearch} className='flex z-20 w-[95%] lg:w-[85%] justify-center bg-blue-100 p-5 shadow-xl'>
          <Input className='text-[10px] sm:text-xs h-full md:text-[1.5ch] bg-white rounded-none rounded-l text-black p-2 w-4/5 md:w-[60%] border-solid z-20' placeholder='Buscar por marca, linea, año y color' type='text' />
          <Button className='md:w-28 w-16 p-0 border-solid h-full rounded-none rounded-r grid place-content-center bg-blue-500 -z-20'>
            <IoSearch className='opacity-80 w-4 md:w-5 h-auto' />
          </Button>
        </form>
      </section>

      <section id='catalogo'>
        {loading
          ? <CarsSkeleton className='grid-col-res my-16 place-content-center' />
          : <CarsList result={filteredCars} />}
      </section>
    </>

  )
}

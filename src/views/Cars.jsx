import CarsList from '../components/CarsList'
import Input from '../components/Input'
import { useLocation } from 'react-router-dom'
import { CarsSkeleton } from '../components/CarsSkeleton'
import Button from '../components/Button'
import { IoSearch } from 'react-icons/io5'
import useFetchCars from '../hooks/useFetchCars'
import { useEffect, useRef, useState } from 'react'
import Select from '../components/Select'
import axios from 'axios'
import { ages } from '../helpers/data'

export default function page() {
  const [brands, setBrands] = useState([])
  const filterQuery = useLocation().search.split('=')[1]
  const { loading, cars, getCars } = useFetchCars(`?page=1&limit=10&show=true&search=${filterQuery || ''}`)
  const search = useRef('')

  useEffect(() => {
    axios.get('https://maxapi.onrender.com/api/cars/brands')
      .then(brand => setBrands(brand.data))
      .catch(err => console.log(err))
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    search.current = e.target[0].value
    getCars(`?page=1&limit=10&show=true&search=${e.target[0].value} ${e.target[1].value} ${e.target[2].value}`)
  }

  return (
    <>
      <section className='image-cars flex flex-col justify-center px-1 text-center w-full rounded-b-lg lg:h-[60vh] h-[55vh] bg-center bg-cover bg-fixed overflow-hidden'>
        <h1 className='text-white md:text-4xl text-3xl font-bold'>NUESTROS  AUTOS</h1>
      </section>
      <section className='w-full bg-transparent max-[1920px]:top-[64px] min-[2560px]:top-[91px] flex justify-center z-20'>
        <form onSubmit={handleSearch} className='flex flex-col md:flex-row z-20 w-[95%] lg:w-[85%] justify-center items-center bg-blue-100 p-5 shadow-xl gap-7'>
          <Input className='w-full text-[10px] sm:text-xs h-full md:text-[1.5ch] bg-white rounded text-black p-2 md:w-[40%] border-solid z-20' placeholder='Buscar por marca, linea, año y color' type='text' />
          <div className='flex w-full md:w-auto gap-3'>
            <Select placeholder='Modelo' className='bg-white min-w-[50%] md:min-w-[150px]'>
              <option value=''>Marca</option>
              {
                brands.map((brand) => {
                  return (
                    <option key={brand._id} value={brand.name}>{brand.name}</option>
                  )
                })
              }
            </Select>
            <Select placeholder='Modelo' className='bg-white min-w-[50%] md:min-w-[150px]'>
              <option value=''>Año</option>
              {
                ages.map((age) => {
                  return (
                    <option key={age} value={age}>{age}</option>
                  )
                })
              }
            </Select>
          </div>
          <Button className='w-[115px] md:w-28 p-0 border-solid h-full rounded grid place-content-center bg-blue-500 -z-20 py-2 mx-auto md:mx-0'>
            <IoSearch className='opacity-80 w-4 md:w-5 h-auto' />
          </Button>
        </form>
      </section>

      <section id='catalogo'>
        {loading
          ? <CarsSkeleton className='grid-col-res my-16 place-content-center' />
          : cars.result
            ? <CarsList
              cars={cars.result}
              currentPage={cars.currentPage}
              totalPages={cars.totalPages} getCars={getCars}
              search={search}
            />
            : <h2 className='text-center my-20'>No hay vehiculos</h2>}
      </section>
    </>

  )
}

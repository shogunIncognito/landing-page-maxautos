import { RiEmotionSadLine } from 'react-icons/ri'
import { Pagination } from 'keep-react'
import { useEffect, useState } from 'react'
import { TargetCar } from './TargetCar'

// la cantidad de carros por página
const itemsPerPage = 8

export default function CarsI ({ result }) {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    window.scrollTo({ top: 450, behavior: 'smooth' })
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [result])

  if (result.length === 0) {
    return (
      <h1 className='text-center justify-center items-center gap-1.5 my-24 flex text-2xl font-bold'>
        No se encontraron resultados
        <RiEmotionSadLine size={36} />
      </h1>
    )
  }

  const totalPages = Math.ceil(result.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCars = result.slice(startIndex, endIndex)

  return (
    <>
      <Pagination
        className='flex my-5 justify-center items-center'
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={totalPages}
        iconWithOutText
        paginateWithBorder
        prevNextShape='circle'
      />
      <div className='h-full mb-14 mt-[1.5rem] grid-col-res justify-center justify-items-center xl:mx-32 md:mx-5 gap-4 p-5'>
        <TargetCar carsJson={currentCars} style='w-[87%]' />
      </div>

      <Pagination
        className='flex my-5 justify-center items-center'
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={totalPages}
        iconWithOutText
        paginateWithBorder
        prevNextShape='circle'
      />
    </>

  )
}

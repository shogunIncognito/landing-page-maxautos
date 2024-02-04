import { RiEmotionSadLine } from 'react-icons/ri'
import { Pagination } from 'keep-react'
import { useEffect, useState } from 'react'
import { TargetCar } from './TargetCar'

// la cantidad de carros por página
const itemsPerPage = 8

export default function CarsI ({ result }) {
  const [currentPage, setCurrentPage] = useState(1)

  if (result.length === 0) {
    return (
      <h1 className='text-center justify-center items-center gap-1 my-24 flex text-2xl font-bold'>
        No se encontraron resultados
        <RiEmotionSadLine />
      </h1>
    )
  }

  const totalPages = Math.ceil(result.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCars = result.slice(startIndex, endIndex)

  useEffect(() => {
    window.scrollTo({ top: 450, behavior: 'smooth' })
  }, [currentPage])

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
      <TargetCar carsJson={currentCars} />
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

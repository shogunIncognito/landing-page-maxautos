import { RiEmotionSadLine } from 'react-icons/ri'
import { Pagination } from 'keep-react'
import { useState } from 'react'
import { TargetCar } from './TargetCar'

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

  return (
    <>
      <Pagination
        className='flex my-5 justify-center items-center'
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={20}
        iconWithOutText
        paginateWithBorder
        prevNextShape='circle'
      />
      <TargetCar carsJson={result} />
      <Pagination
        className='flex my-5 justify-center items-center'
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={20}
        iconWithOutText
        paginateWithBorder
        prevNextShape='circle'
      />
    </>

  )
}

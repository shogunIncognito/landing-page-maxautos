import { RiEmotionSadLine } from 'react-icons/ri'
import { Pagination } from 'keep-react'
import { useEffect } from 'react'
import { TargetCar } from './TargetCar'

export default function CarsI ({ cars, totalPages, currentPage, getCars, search }) {
  useEffect(() => {
    window.scrollTo({ top: 450, behavior: 'smooth' })
  }, [currentPage])

  const handlePageChange = (page) => {
    getCars(`?page=${page}&limit=10&show=true&search=${search.current || ''}`)
  }

  if (cars.length === 0) {
    return (
      <h1 className='text-center justify-center items-center gap-1.5 my-24 flex text-2xl font-bold'>
        No se encontraron resultados
        <RiEmotionSadLine size={36} />
      </h1>
    )
  }

  return (
    <>
      <Pagination
        className='flex my-5 justify-center items-center'
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
        iconWithOutText
        paginateWithBorder
        prevNextShape='circle'
      />

      <div className='h-full mb-14 mt-[1.5rem] grid-col-res justify-center justify-items-center xl:mx-32 md:mx-5 gap-4 p-5'>
        <TargetCar cars={cars} style='w-[87%]' />
      </div>

      <Pagination
        className='flex my-5 justify-center items-center'
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
        iconWithOutText
        paginateWithBorder
        prevNextShape='circle'
      />
    </>

  )
}

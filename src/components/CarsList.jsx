import { RiEmotionSadLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Button, Card, Pagination } from 'keep-react'
import { AiOutlineCar, AiOutlineTags } from 'react-icons/ai'
import { GrConfigure } from 'react-icons/gr'
import { SlSpeedometer } from 'react-icons/sl'
import { useState } from 'react'

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

      <div className='h-full mb-14 mt-[1.5rem] grid-col-res justify-center justify-items-center xl:mx-32 md:mx-5 gap-6 p-5'>
        {result.map((car) => (
          <Card
            key={car._id}
            className='!max-w-xs overflow-hidden rounded-md md:!max-w-[480px]'
            imgSrc={car.preview || car.images[0]}
            imgSize='md'
            horizontal
          >
            <Card.Container className='space-y-5 p-3'>
              <Card.Title className='flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4'>
                <SlSpeedometer className='mr-2' size={24} />
                <span className='uppercase'>{car.line}</span>
              </Card.Title>
              <Card.Container className='grid grid-cols-2 gap-4'>
                <Card.Title className='flex items-center gap-2 !text-body-5 font-medium text-metal-500'>
                  <AiOutlineTags className='mr-2' size={24} />

                  <span>{car.brand}</span>
                </Card.Title>
                <Card.Title className='flex items-center gap-2 !text-body-5 font-medium text-metal-500'>
                  <GrConfigure className='mr-2' size={24} />
                  <span>{car.model}</span>
                </Card.Title>
              </Card.Container>
              <Card.Container className='grid grid-cols-2 gap-4'>
                <Card.Title className='flex items-center gap-2 !text-body-5 font-medium text-metal-500'>
                  {/* <GrConfigure className='mr-2' size={24} /> */}
                  <SlSpeedometer className='mr-2' size={24} />
                  <span>{car.kilometers}</span>
                </Card.Title>
                <Card.Title className='flex items-center gap-2 !text-body-5 font-medium text-metal-500'>
                  <AiOutlineCar className='mr-2' size={24} />
                  <span className='capitalize'>{car.type}</span>
                </Card.Title>
              </Card.Container>
              <Card.Container className='my-3 grid grid-cols-1 gap-4'>
                <Card.Title className='text-body-3 font-medium text-metal-500'>COP {Math.round(car.price).toLocaleString()}</Card.Title>
                <Link className='w-auto' to={`/cars/${car._id}`}>
                  <Button type='primary' className='w-full bg-blue-600' size='sm'>
                    Ver más
                  </Button>
                </Link>
              </Card.Container>
            </Card.Container>
          </Card>
        )
        )}
      </div>

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

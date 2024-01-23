import { Skeleton } from 'keep-react'

export const CarsSkeleton = () => {
  return (
    <div className='mb-14 grid-col-res gap-6 flex mt-[1.5rem] md:mx-32 p-5'>
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} animation>
          <div className='grid grid-cols-4 items-center justify-center'>
            <div className='col-span-1 flex justify-center '>
              <Skeleton.Line height='h-[120px]' />
            </div>
            <div className='col-span-3 flex-col flex items-center justify-center'>
              <Skeleton.Line height='h-[20px] ml-2' />
              <Skeleton.Line height='h-[20px] ml-2' />
              <Skeleton.Line height='h-[20px] ml-2' />
            </div>
          </div>
        </Skeleton>
      ))}
    </div>
  )
}

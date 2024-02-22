import { Skeleton } from 'keep-react'
import { twMerge } from 'tailwind-merge'

export const CarsSkeleton = ({ className, size = 8 }) => {
  return (
    <div className={twMerge('mb-14 gap-6 flex mt-[1.5rem] md:mx-32 p-5', className)}>
      {Array.from({ length: size }).map((_, index) => (
        <Skeleton key={index} animation>
          <div className='grid grid-cols-1 w-5/6 items-center mx-auto justify-center'>
            <div className='col-span-1 flex justify-center '>
              <Skeleton.Line height='h-[120px]' />
            </div>
            <div className='col-span-3 flex-col flex items-center justify-center'>
              <Skeleton.Line height='h-[20px] ml-2' />
              <Skeleton.Line height='h-[20px] ml-2' />
              <Skeleton.Line height='h-[20px] w-5/6  ml-2' />
              <Skeleton.Line height='h-[30px] w-28  ml-2' />
            </div>
          </div>
        </Skeleton>
      ))}
    </div>
  )
}

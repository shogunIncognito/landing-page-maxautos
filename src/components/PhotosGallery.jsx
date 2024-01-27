import * as images from '../assets/personal/images'
import { IoOpenSharp } from 'react-icons/io5'

export default function PhotosGallery () {
  const data = Object.entries(images).slice(0, 8)

  return (
    <div className='grid grid-cols-3 gap-4 mx-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
      {data.map((imageLink, index) => (
        <a href={imageLink[1]} target='_blank' className='group relative' key={index} rel='noreferrer'>
          <img
            className='h-56 w-32 md:w-44 lg:w-full max-w-full rounded-lg object-cover object-center'
            src={imageLink[1]}
            alt='gallery-photo'
          />
          <div className='absolute rounded inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 flex items-center justify-center'>
            <IoOpenSharp color='white' size={32} />
          </div>
        </a>
      ))}
    </div>
  )
}

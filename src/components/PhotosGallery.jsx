import { Carousel } from 'keep-react'
import * as images from '../assets/personal/images'
import { IoOpenSharp } from 'react-icons/io5'
import useDisclosure from '../hooks/useDisclosure'
import { FullscreenCarrousel } from './FullscreenCarrousel'
import { useState } from 'react'

export default function PhotosGallery () {
  const { open, handleClose, handleOpen } = useDisclosure()
  const [image, setImage] = useState('')
  const data = Object.entries(images).map((image) => image[1])

  const handleClick = (img) => {
    setImage(img)
    handleOpen()
  }

  return (
    <>
      {/* desktop view gallery */}
      <div className='md:grid grid-cols-3 hidden gap-4 mx-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
        {data.slice(0, 8).map((imageLink, index) => (
          <article className='group relative cursor-pointer' key={index} onClick={() => handleClick(imageLink)}>
            <img
              className='h-56 w-32 md:w-44 lg:w-full max-w-full rounded-lg object-cover object-center'
              src={imageLink}
              alt='gallery-photo'
            />
            <div className='absolute rounded inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 flex items-center justify-center'>
              <IoOpenSharp color='white' size={32} />
            </div>
          </article>
        ))}
      </div>

      {/* mobile view carrousel */}
      <Carousel indicatorsType='ring' className='md:hidden' indicators>
        {data.map((imageLink, index) => (
          <article className='group relative' key={index} onClick={() => handleClick(imageLink)}>
            <img
              src={imageLink}
              alt='gallery-photo'
            />
            <div className='absolute rounded inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 flex items-center justify-center'>
              <IoOpenSharp color='white' size={32} />
            </div>
          </article>
        ))}
      </Carousel>

      <FullscreenCarrousel open={open} handleClose={handleClose} selectedImage={image} data={data} />
    </>
  )
}

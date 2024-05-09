import { Carousel } from 'keep-react'
import { IoOpenSharp } from 'react-icons/io5'
import useDisclosure from '../hooks/useDisclosure'
import { FullscreenCarrousel } from './FullscreenCarrousel'
import { useState } from 'react'

export default function PhotosGallery () {
  const { open, handleClose, handleOpen } = useDisclosure()
  const [image, setImage] = useState('')
  // const data = Object.entries(images).map((image) => image[1])

  const handleClick = (img) => {
    setImage(img)
    handleOpen()
  }

  const data = [
    'https://www.elcarrocolombiano.com/wp-content/uploads/2020/05/20200513-CONCESIONARIOS-REAPERTURA-EN-CUARENTENA-02.jpg',
    'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2023/08/17/64de97a4c2a05.jpeg',
    'https://www.valoraanalitik.com/wp-content/uploads/2023/10/Vehiculos-en-Colombia-696x406.jpg',
    'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2023/07/04/64a4348f883ac.jpeg',
    'https://www.elcarrocolombiano.com/wp-content/uploads/2020/05/20200513-CONCESIONARIOS-REAPERTURA-EN-CUARENTENA-03.jpg',
    'https://90minutos.co/wp-content/uploads/2022/09/concesionarios-se-estan-demorando-hasta-14-meses-para-entregar-carros-20-09-2022-772x369.jpg',
    'https://www.portafolio.co/files/article_new_multimedia/uploads/2023/11/10/654eef9abb037.png',
    'https://www.elcarrocolombiano.com/wp-content/uploads/2022/07/20220708-COMO-Y-DONDE-VENDER-MI-CARRO-USADO-EN-COLOMBIA-GUIA-PRACTICA-AUTOEXPO-CONCESIONARIO-01.jpg',
    'https://mayorautos.com/wp-content/uploads/2020/01/mazda3-nueva-gen.png',
    'https://www.qhubocali.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-19-at-11.18.41-AM-1024x576.jpeg',
    'https://www.qhubocali.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-19-at-11.18.41-AM-1024x576.jpeg'
  ]

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
          <article className='group relative overflow-hidden' key={index} onClick={() => handleClick(imageLink)}>
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

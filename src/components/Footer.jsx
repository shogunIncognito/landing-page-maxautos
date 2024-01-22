import MaxIcon from '../assets/maxautosicon.png'
import { BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { GrLocation, GrMapLocation } from 'react-icons/gr'
import { MdLocationCity } from 'react-icons/md'

export default function Footer () {
  return (
    <>
      <footer className='grid grid-cols-1 md:grid-cols-3 h-auto bg-blue-400 p-6'>
        <div className='flex flex-col items-center justify-center'>
          <img className='w-28 h-20 my-4' src={MaxIcon} />
          <h1 className='text-lg italic'>Usados que dan confianza</h1>
        </div>
        <hr className='my-2 md:hidden' />
        <div className='flex flex-col items-center justify-center'>
          <h1 className='my-2 font-semibold'>CONTACTANOS</h1>
          <a href='mailto:maxautosmb53@gmail.com' className='flex my-2'><HiOutlineMail className='mx-1' size={25} />maxautosmb53@gmail.com</a>
          <a href='https://wa.me/573123719021' target='_blank' className='flex my-2' rel='noreferrer'><BsWhatsapp className='mx-1' size={25} />+57 312 3719021</a>
          <a href='https://www.instagram.com/maxautosusados/' target='_blank' className='flex my-2' rel='noreferrer'><AiOutlineInstagram className='mx-1' size={25} />maxautosusados</a>
        </div>
        <hr className='my-2 md:hidden' />
        <div className='flex flex-col items-center justify-center'>
          <p className='flex my-2'><MdLocationCity className='mx-1' size={25} /> Colombia</p>
          <p className='flex my-2'><GrMapLocation className='mx-1' size={25} /> Villavicencio - Meta</p>
          <p className='flex my-2'><GrLocation className='mx-1' size={25} /> Cra 22 N. 4b- 27 Barrio Alborada</p>
        </div>
      </footer>
    </>
  )
}

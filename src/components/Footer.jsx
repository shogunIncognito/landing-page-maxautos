import { Link } from 'react-router-dom'
import MaxIcon from '../assets/maxautoslogoblanco.png'

export default function Footer () {
  return (
    <footer className='bg-blue-950 p-6 text-white rounded-tr-[70px]'>
      <div className='max-w-7xl mx-auto flex-col md:flex-row gap-7 md:gap-1 flex justify-between items-center'>
        <div className='flex flex-col items-center'>
          <img className='w-32 h-auto my-4' src={MaxIcon} />
          <p className='mt-2 text-md'>Usados que dan confianza</p>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-lg font-semibold'>CONTACTANOS</h3>
          <div className='flex items-center mt-2'>
            <MailIcon className='h-6 w-6 mr-2 text-white' />
            <Link to='mailto:maxautosmb53@gmail.com' target='_blank' className='text-sm' rel='noreferrer'>maxautosmb53@gmail.com</Link>
          </div>
          <div className='flex items-center mt-2'>
            <PhoneIcon className='h-6 w-6 mr-2 text-white' />
            <Link to='https://wa.me/573123719021' target='_blank' className='text-sm' rel='noreferrer'>+57 312 3719021</Link>
          </div>
          <div className='flex items-center mt-2'>
            <InstagramIcon className='h-6 w-6 mr-2 text-white' />
            <Link target='_blank' to='https://www.instagram.com/maxautosusados' className='text-sm'>maxautosusados</Link>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <div className='flex items-center'>
            <LocateIcon className='h-6 w-6 mr-2 text-white' />
            <p className='text-sm'>Colombia</p>
          </div>
          <div className='flex items-center mt-2'>
            <MapPinIcon className='h-6 w-6 mr-2 text-white' />
            <p className='text-sm'>Villavicencio - Meta</p>
          </div>
          <div className='flex items-center mt-2'>
            <HomeIcon className='h-6 w-6 mr-2 text-white' />
            <Link to='/about#maps' className='text-sm'>Cra 22 N. 4b- 27 Barrio Alborada</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function HomeIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  )
}

export function InstagramIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
    </svg>
  )
}

export function LocateIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='2' x2='5' y1='12' y2='12' />
      <line x1='19' x2='22' y1='12' y2='12' />
      <line x1='12' x2='12' y1='2' y2='5' />
      <line x1='12' x2='12' y1='19' y2='22' />
      <circle cx='12' cy='12' r='7' />
    </svg>
  )
}

function MailIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='20' height='16' x='2' y='4' rx='2' />
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
    </svg>
  )
}

function MapPinIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
      <circle cx='12' cy='10' r='3' />
    </svg>
  )
}

function PhoneIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
    </svg>
  )
}

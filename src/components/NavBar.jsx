import { Link, useLocation } from 'react-router-dom'
import maxautoswhite from '../assets/maxautosicon.png'
import { appRoutes } from '../helpers/data'
import { InstagramIcon, LocateIcon } from './Footer'
import { FaWhatsapp } from 'react-icons/fa'

export default function NavBar () {
  const path = useLocation().pathname
  return (
    <div className='w-full bg-transparent hidden z-30 flex-col top-0 max-lg:hidden lg:flex items-center justify-center fixed'>

      <div className='w-[98%] bg-slate-200 px-10 flex justify-between text-white items-center p-3 rounded-b-lg shadow-lg'>
        <div className='flex gap-3'>
          <div className='flex items-center'>
            <FaWhatsapp className='h-6 w-6 mr-2 text-black' />
            <Link to='https://wa.me/573123719021' target='_blank' className='text-sm text-black' rel='noreferrer'>+57 312 3719021</Link>
          </div>
          <div className='flex items-center'>
            <InstagramIcon className='h-6 w-6 mr-2 text-black' />
            <Link target='_blank' to='https://www.instagram.com/maxautosusados' className='text-sm text-black'>maxautosusados</Link>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <LocateIcon className='h-6 w-6 mr-2 text-black' />
            <Link to='/about#maps' className='text-sm text-black'>Cra 22 N. 4b- 27 Barrio Alborada</Link>
          </div>
        </div>
      </div>

      <header className='bg-blue-950 max-[1920px]:h-[70px] min-[2560px]:h-24 shadow-xl lg:flex-col md:flex-row top-0 duration-300 ease-in-out transition-all z-[60] p-4 lg:flex w-[95%] rounded-b-lg items-center hidden'>
        <nav className='m-auto w-full h-full flex justify-between items-center content-center'>
          <Link to='/' className=''>
            <img className='w-[70px] h-12 invert' src={maxautoswhite} alt='logo' />
          </Link>
          <ul className='flex justify-center items-center gap-2'>
            {appRoutes.map((route, index) => (
              <li key={index} className={`link-animated ${path === route.path ? 'link-animated-selected' : ''} hover:bg-slate-600/20 rounded-lg transition-all duration-300 ease-in-out text-white`}>
                <Link className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent' to={route.path}>
                  <route.icon size={24} />
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

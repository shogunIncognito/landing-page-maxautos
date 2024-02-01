import { AiFillHome } from 'react-icons/ai'
import { RiTeamFill } from 'react-icons/ri'
import { FaCarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AIChat from './AIChat'
import maxautoswhite from '../assets/maxautosicon.png'

export default function NavBar () {
  return (
    <div className='w-full h-24 bg-transparent max-lg:hidden lg:flex justify-center absolute'>
      <header className='bg-white max-[1920px]:h-[75px] min-[2560px]:h-24 shadow-xl lg:flex-col md:flex-row top-0 fixed duration-300 ease-in-out transition-all z-[60] p-4 lg:flex w-[95%] rounded-b-lg items-center hidden '>
        <nav className='m-auto w-full h-full flex justify-between items-center content-center'>
          <Link to='/' className=''>
            <img className='w-[70px] h-12' src={maxautoswhite} alt='logo' />
          </Link>
          <ul className='flex justify-center items-center'>
            <li className='hover:text-blue-900 rounded-lg transition-all duration-300 ease-in-out text-black'>
              <Link className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent' to='/'>
                <AiFillHome size={23} />
                Inicio
              </Link>
            </li>
            <li className='hover:text-blue-900 rounded-lg transition-all duration-300 ease-in-out text-black'>
              <Link className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent' to='/cars'>
                <FaCarAlt size={23} />
                Nuestros Autos
              </Link>
            </li>
            <li className='hover:text-blue-900 rounded-lg transition-all duration-300 ease-in-out text-black'>
              <Link className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent' to='/about#weare'>
                <RiTeamFill size={23} />
                Nosotros
              </Link>
            </li>
          </ul>
          <AIChat sizeRobot={36} style='text-black hover:text-blue-900' />
        </nav>
      </header>
    </div>
  )
}
